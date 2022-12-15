var mysql = require('mysql');

var db = mysql.createConnection({
    host     : '34.64.155.72',
    user     : 'root',
    password : 'oss',
    database : 'opendiary'
});
db.connect();
module.exports = db;