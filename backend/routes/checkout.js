const express=require('express')
const router=express.Router()
const connection=require('../db/db')
const authenticate=require('../middleware/authenticate')

router.get("/",(req,res)=>{
    console.log("entered")
    connection.execute('select * from productdate natural join productlocation natural join productnumber natural join productprice natural join producttarget natural join product where product.productId=productdate.productId and product.productId=productlocation.productId and product.productId=productnumber.productId and product.productId=productprice.productId and product.productId=producttarget.pid;',(err,result)=>{
        if(err) res.json({err:err})
        // console.log(result)
        res.json(result)
    })
})
router.post("/",(req,res)=>{
    const {customer,salesdata}=req.body;
    const {customerName,company,address}=customer
    console.log(customerName)
    console.log(address)
    console.log(salesdata)
    connection.execute('insert into customer (name,company,address) values (?,?,?)',[customerName,company,address],(error,result)=>{
        if (error) {return res.json({error:error})}
        console.log("customer info inserted")
    })
    connection.execute('select * from customer where name=?',[customerName],(error,result)=>{
        if(error) return res.json({error:error});
        result=result[result.length-1]
        billnumber=result.billnumber
        console.log(billnumber)
        for (data of salesdata){
            console.log(data)
            let {productName,quantity,batchNumber,price,salesDate}=data
            connection.execute('insert into salesdetail values (?,?,?,?,?)',[billnumber,productName,quantity,price,salesDate],(error,result)=>{
                if(error) return res.json({error:error});
                console.log("product inserted")
            })
            let productId;
            connection.execute('select productId from product where productName=?',[productName],(error,result)=>{
                if(error) return res.json({error:error});
                result=result[result.length-1]
                productId=result.productId
                connection.execute('update  productnumber set quantity=quantity-?  where productId=? and batchNumber=?',[quantity,productId,batchNumber],(error,result)=>{
                    if(error) return res.json({error:error});
                    connection.execute('select * from productnumber where batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                        if (error) return res.send({error:error})
                        if(result.length === 0){
                            return// res.status(500).send({message:"result 0"})
                        }
                        const [len]=result
                        if (len.quantity > 0 )
                        {
                            res.status(200).json({message:"sucess"})
                        }
                        else
                        {
                            connection.execute(' delete from productnumber WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                                if (error) return res.json({error:error})
                                connection.execute(' delete from productdate WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                                    if (error) return res.json({error:error})
                                    connection.execute(' delete from productprice WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                                        if (error) return res.json({error:error})
                                        else{
                                            return res.send({message:"deleted"})
                                        }
                                    })
                                })
                            })
                        }
                     })
                })
            })
        }
    })
})
module.exports=router;
