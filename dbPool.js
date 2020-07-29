const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "awrsk7n2s0r86l6b",
    password: "sw9d012gbu07sar6",
    database: "yfbsqaum1r7z1cek"
});

module.exports = pool;
