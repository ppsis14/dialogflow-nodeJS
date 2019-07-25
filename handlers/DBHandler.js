const mysql = require('mysql')
require('dotenv').config()

var db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME
})

// const db = mysql.createConnection(DBconfig);

module.exports = db.connect((err) => {
    if (err) {
        throw err
        // console.log("Mysql is not connected...");
    }
    console.log("Mysql is connected already...");
})

// function selectData(data, from, where) {
//     strQuery = "SELECT "
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