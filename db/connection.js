const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Th15_i5_My5QL.',
    database: 'employee_tracker'
});

module.exports = db;