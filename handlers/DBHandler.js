const mysql = require('mysql')
require('dotenv').config()
// const DBconfig = require('./DBconfig.js')
var db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME
})
var strQuery

module.exports = db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("Mysql is connected...");
})

// function selectData(data, from, where) {
//     strQuery = "SELECT "
//     return strQuery
// }

// function insertData(data, into) {
//     strQuery = "INSERT data INTO into"
//     return strQuery
// }

// function getConnection() {
//     return db
// }

// module.exports = {
//     selectData,
//     insertData,
//     getConnection
//  }