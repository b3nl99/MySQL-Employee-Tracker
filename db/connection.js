const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Spacecake32!',
    database: 'employee_tracker'
});

module.exports = db;