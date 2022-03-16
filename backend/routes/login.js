const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
require('dotenv').config()
const connection=require('../db/db')

router.post('/',(req,res)=>{
    const {username,password}=req.body;
    connection.execute('select * from employee where `employee`=? AND `password`=? ',[username,password],
    function(err,result,field){
        if(err){
            res.send({err:err})
        }
        if(result.length>0){
            console.log(result)
            console.log('login sucess')
            const user={name:username}
            const accessToken=jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json({accessToken:accessToken})
        }
        else{
            res.status(400).send({message:"Wrong username/password"})
        }
    })
})
router.post("/new",(req,res)=>{
    const {username,password}=req.body;
    connection.execute('insert into employee (employee,password) values (?,?)',[username,password],(error,result)=>{
        if (error) return res.json({error:error})
        res.json({"success":"success"})
    })
})
router.post("/checkname",(req,res)=>{
    const {username}=req.body;
    connection.execute('select * from employee where employee=?',[username],(error,result)=>{
        if (error) 
        {
            console.log("error")
            return res.json({error:error})
        }
        if(result.length>0){
            console.log("same user")
            res.status(200).send({message:"failed"})
        }
        else{
            console.log("user ok")
            res.status(200).send({message:"success"})
        }

    })
})
module.exports=router