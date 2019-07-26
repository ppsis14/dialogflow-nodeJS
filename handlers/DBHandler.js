const mysql = require('mysql')
require('dotenv').config()

var db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME
})
db.connect((err) => {
    if (err) {
        throw err
        // console.log("Mysql is not connected...");
    }
    console.log("Mysql is connected already...1");
    // return "Mysql is connected already..."
})

let sql = `SELECT * FROM tpmap_datapoints LIMIT 2`;

db.query(sql, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
    console.log(results);
})