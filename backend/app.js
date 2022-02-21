const express = require("express");

const authenticate=require("./middleware/authenticate")

const app=express();

app.use(express.json())

const connection=require("./db/db");

const login=require("./routes/login")
const products=require("./routes/products")
const entry=require("./routes/entry")
const checkout=require("./routes/checkout")
app.use("/login",login)
app.use("/entry",entry)
app.use("/product",products)
app.use("/checkout",checkout)

app.get('/post',authenticate,(req,res)=>{
    console.log("authentication passed")
    res.json({})
})


app.listen(5000,()=>console.log('Serving in localhost 5000'));
