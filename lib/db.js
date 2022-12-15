var mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'rnfma9dbwls!',
    database:'opentutorials'
});
db.connect();
module.exports = db;