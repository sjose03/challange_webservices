var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'newuser',
  password : '123456',
  port : 3306,
  database: 'challange'
});

module.exports = connection;