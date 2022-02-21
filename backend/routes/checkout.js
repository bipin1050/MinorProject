const express=require('express')
const router=express.Router()
const connection=require('../db/db')
const authenticate=require('../middleware/authenticate')

router.get("/",(req,res)=>{
    console.log("entered")
    connection.execute('select productName,batchNumber,price,quantity from product natural join productNumber natural join productPrice',(err,result)=>{
        if(err) res.json({err:err})
        console.log(result)
        res.json(result)
    })
})
router.post("/",(req,res)=>{
    
})
module.exports=router