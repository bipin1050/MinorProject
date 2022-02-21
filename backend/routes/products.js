const express=require('express')
const router=express.Router()
const connection=require('../db/db')
const authenticate=require('../middleware/authenticate')

router.get("/",authenticate,(req,res)=>{
    connection.execute('select * from product',(err,result)=>{
        if(err){
            res.json({err:err})
        }
        console.log(result)
        res.json({'sucess':'sucess'})
    })
})
router.get("/query",(req,res)=>{
    const {productName}=req.query
    connection.execute('select * from product where productName=?',[productName],(error,result)=>{
        if(error){
            res.send({err:err})
        }
        res.json(result)
    })
})
router.get("/category/query",(req,res)=>{
    const {category}=req.query
    connection.execute('select * from product where category=?',[category],(error,result)=>{
        if(error){
            res.send({err:err})
        }
        res.json(result)
    })
})
router.get("/manufacturer/query",(req,res)=>{
    const {manufacturer}=req.query
    connection.execute('select * from product where manufacturer=?',[manufacturer],(error,result)=>{
        if(error){
            res.send({err:err})
        }
        res.json(result)
    })
})
module.exports=router