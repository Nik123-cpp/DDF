const mysql = require('mysql2');


const connection =mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '25081998@nikhil',
    database : 'DDF_Data'
});


module.exports = connection.promise()