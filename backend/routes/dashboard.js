const express=require('express')
const router=express.Router()
const connection=require('../db/db')
const authenticate=require('../middleware/authenticate')

router.get("/",(req,res)=>{
    connection.execute("select sum(price) as price,salesDate from salesdetail where datediff(curdate(),salesDate)<=30 group by salesDate",(err,result)=>{
        if(err) res.json({err:err})
        console.log(result)
        res.json(result)
    })
})
router.get("/product",(req,res)=>{
    const {productName}=req.body;
    connection.execute("select sum(price) as price,salesDate from salesdetail where datediff(curdate(),salesDate)<=30 and productname=? group by salesDate",[productName],(err,result)=>{
        if(err) res.json({err:err})
        console.log(result)
        res.json(result)
    })
})
module.exports=router