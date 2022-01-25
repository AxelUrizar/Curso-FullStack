const MYSQL = require('mysql2');
const CONN = MYSQL.createConnection({
host:'localhost',
user:'root',
password:'123456',
database:'my_project'
})
module.exports = CONN;