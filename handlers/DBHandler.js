const mysql = require('mysql')
const DBconfig = require('./DBconfig.js')
const db = mysql.createConnection(DBconfig)
const strQuery

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("Mysql is connected...");
})

function selectData(data, from, where) {
    strQuery = "SELECT "
    return strQuery
}

function insertData(data, into) {
    strQuery = "INSERT data INTO into"
    return strQuery
}

module.exports = {
    selectData,
    insertData,
 }