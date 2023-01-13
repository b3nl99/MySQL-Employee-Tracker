const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Your mysql password',
    database: 'employee_tracker'
});

module.exports = db;