const mysql=require("mysql2")

var connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'2r3vr6qA8xM8meU',
    database:'inventory'
})

module.exports=connection;