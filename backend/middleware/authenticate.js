const jwt=require('jsonwebtoken');
require('dotenv').config()

function authenticate(req,res,next){
    const authHeader=req.body.headers['authorization']
    if(authHeader=== null) return res.sendStatus(401)
    jwt.verify(authHeader,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user=user
        next()
    })
}
module.exports=authenticate