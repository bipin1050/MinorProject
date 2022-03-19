const express=require('express')
const router=express.Router()
const connection=require('../db/db')
const authenticate=require('../middleware/authenticate')

router.get('/',(req,res)=>{
    connection.execute('select * from product',(err,result,field)=>{
        if(err){
            res.send({err:err})
        }
        res.json(result)
        console.log('suceess')
    })
})

// router.post('/existing',(req,res)=>{
//     const {productName,batchNumber,entryDate,quantity,}=req.body;
//     let productId;
//     connection.execute('select `productId` from product where `productName`=?',[productName],(error,result)=>{
//         if(error) return res.json({error:error});
//         [{productId}]=result
//         connection.execute('update  productnumber set quantity=quantity+?  where productId=? and batchNumber=?',[quantity,productId,batchNumber],(error,result)=>{
//             if(error) return res.json({error:error});
//             console.log("sucess")
//         })
//     })
// })

router.post('/existing',(req,res)=>{
    const {productName,batchNumber,price,quantity,manufactureDate,entryDate,expiryDate}=req.body;
    let productId;
    connection.execute('select productId from product where productName=?',[productName],(error,result)=>{
        if(error) return res.json({error:error});
        result=result[result.length-1]
        productId=result.productId
        console.log(productId)
        if(expiryDate===null)
        {
            connection.execute('select price from productprice where productId=?',[productId],(error,result)=>{
                if (error) return res.json({error:error})
                let [pricee]=result
                pricee=pricee.price
                if(parseInt(pricee)===parseInt(price))
                {
                    connection.execute('update  productnumber set quantity=quantity+?  where productId=?',[quantity,productId],(error,result)=>{
                        if(error) return res.json({error:error});
                        res.status(200).send({message:"success"});
                    })
                }
            })
        }
        else
        {
            connection.execute('update  productnumber set quantity=quantity+?  where productId=? and batchNumber=?',[quantity,productId,batchNumber],(error,result)=>{
                if(error) return res.json({error:error});
                res.status(200).send({message:"success"});
            })
        }
    })
})


router.post('/new',(req,res)=>{
    const {productName,category,manufacturer,batchNumber,manufactureDate,entryDate,expiryDate,quantity,location,price,target}=req.body;
    let productId;
    console.log(req.body)
    connection.execute('insert into product (productName,category,manufacturer) values (?,?,?)',[productName,category,manufacturer],(error,result)=>
    {
        if(error) return res.json({error:error});
        console.log("sucesstest")
    })
    connection.execute('select `productId` from product where `productName`=?',[productName],(error,result)=>{
        if(error) return res.json({error:error});
        result=result[result.length-1]
        productId=result.productId
        console.log(manufactureDate)
        console.log(expiryDate)
        console.log(entryDate)
        connection.execute('insert into productdate (productId,batchNumber,manufactureDate,entryDate,expiryDate) values (?,?,?,?,?)',[productId,batchNumber,manufactureDate,entryDate,expiryDate],(error,result)=>{
            if(error) return res.json({error:error});
            console.log("sucess")
        })
        connection.execute('insert into productlocation values (?,?)',[productId,location],(error,result)=>{
            if(error) return res.json({error:error});
            console.log("sucess")
        })
        connection.execute('insert into productnumber values (?,?,?)',[productId,batchNumber,quantity],(error,result)=>{
            if(error) return res.json({error:error});
            console.log("sucess")
        })
        connection.execute('insert into productprice values (?,?,?)',[productId,batchNumber,price],(error,result)=>{
            if(error) return res.json({error:error});
            console.log("sucess")
        })
        connection.execute('insert into producttarget values (?,?)',[productId,target],(error,result)=>{
            if(error) return res.json({error:error});
            console.log("sucess")
        })
        res.status(200).send({message: "entry added"})
    })
})

// router.delete('/remove',(req,res)=>{
//     const {productName,batchNumber,quantity,}=req.body;
//     let productId;
//     console.log(req);
//     console.log(productName,batchNumber,quantity)
//     connection.execute('select productId from product where productName=?',[productName],(error,result)=>{
//         if(error) return res.json({error:error});
//         result=result[result.length-1]
//         productId=result.productId
//         connection.execute('update  productnumber set quantity=quantity-?  where productId=? and batchNumber=?',[quantity,productId,batchNumber],(error,result)=>{
//             if(error) return res.json({error:error});
//             console.log("sucess")
//             connection.execute('select * from productnumber where batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
//                 if (error) return res.send({error:error})
//                 console.log(result)
//                 if(result.length === 0){
//                     return// res.status(500).send({message:"result 0"})
//                 }
//                 const [len]=result
//                 console.log(len)
//                 if (len.quantity > 0 )
//                 {
//                     res.status(200).json({message:"sucess"})
//                 }
//                 else{
//                     connection.execute(' delete from productnumber WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
//                         if (error) return res.json({error:error})
//                         connection.execute(' delete from productdate WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
//                             if (error) return res.json({error:error})
//                             connection.execute(' delete from productprice WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
//                                 if (error) return res.json({error:error})
//                                 return res.send({message:"deleted"})
//                             })
//                         })
//                     })
//                 }
//             })
//         })
//     })
// })
router.delete('/remove',(req,res)=>{
    const {productName,batchNumber,quantity,}=req.body;
    let productId;
    connection.execute('select productId from product where productName=?',[productName],(error,result)=>{
        if(error) return res.json({error:error});
        result=result[result.length-1]
        productId=result.productId
        connection.execute('update  productnumber set quantity=quantity-?  where productId=? and batchNumber=?',[quantity,productId,batchNumber],(error,result)=>{
            if(error) return res.json({error:error});
            console.log("sucess")
            connection.execute('select * from productnumber where batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                if (error) return res.send({error:error})
                console.log(result)
                const [len]=result
                console.log(len)
                if (len.quantity > 0)
                {
                    res.status(200).json({message:"sucess"})
                }
                else{
                    connection.execute(' delete from productnumber WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                        if (error) return res.json({error:error})
                        connection.execute(' delete from productdate WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                            if (error) return res.json({error:error})
                            connection.execute(' delete from productprice WHERE batchNumber=? and productId=?',[batchNumber,productId],(error,result)=>{
                                if (error) return res.json({error:error})
                                return res.send({message:"deleted"})
                            })
                        })
                    })
                }
            })
        })
    })
})

module.exports=router