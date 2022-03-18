const mysql=require("mysql2")

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "",
    database: "inventory" 
});

module.exports=connection;