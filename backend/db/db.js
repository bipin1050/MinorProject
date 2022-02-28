const mysql=require("mysql2")

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

module.exports=connection;