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
            res.send({message:"Wrong username/password"})
        }
    })
})
module.exports=router