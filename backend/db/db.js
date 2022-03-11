const mysql=require("mysql2")

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "Mysql@1050.",
    database: "inventory"
})

module.exports=connection;