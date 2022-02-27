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

router.post('/existing',(req,res)=>{
    const {productName,batchNumber,entryDate,quantity,}=req.body;
    let productId;
    connection.execute('select `productId` from product where `productName`=?',[productName],(error,result)=>{
        if(error) return res.json({error:error});
        [{productId}]=result
        connection.execute('update  productnumber set quantity=quantity+?  where productId=? and batchNumber=?',[quantity,productId,batchNumber],(error,result)=>{
            if(error) return res.json({error:error});
            console.log("sucess")
        })
    })
})


router.post('/new',(req,res)=>{
    const {productName,category,manufacturer,batchNumber,manufactureDate,entryDate,expiryDate,quantity,location,price,target}=req.body;
    let productId;
    console.log(req.body)
    connection.execute('insert into product (productName,category,manufacturer) values (?,?,?)',[productName,category,manufacturer],(error,result)=>
    {
        if(error) return res.json({error:error});
        console.log("sucess")
    })
    connection.execute('select `productId` from product where `productName`=?',[productName],(error,result)=>{
        if(error) return res.json({error:error});
        result=result[result.length-1]
        productId=result.productId
        connection.execute('insert into productdate values (?,?,?,?,?)',[productId,batchNumber,manufactureDate,entryDate,expiryDate],(error,result)=>{
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
        //res.status(200).send({message: "entry added ?? "})
    })
})

module.exports=router