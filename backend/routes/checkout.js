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
    
})
module.exports=router