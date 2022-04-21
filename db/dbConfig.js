const mysql = require("mysql")

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"irent_db"
})

conn.connect(err=>{
    if(err){
        throw err
    }else{
        console.log("database is connencted successfully");
    }
})

module.exports = conn;