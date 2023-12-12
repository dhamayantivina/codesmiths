const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost", 
    user:"root", 
    password: "",
    database: "urbanfarm"
})

module.exports = db 