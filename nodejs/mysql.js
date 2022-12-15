var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '34.64.155.72',
    user     : 'root',
    password : 'oss',
    database : 'opendiary'
});

connection.connect();

connection.query('SELECT * from topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();
