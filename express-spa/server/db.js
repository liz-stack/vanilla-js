require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'myboard',
    port: '3306'

    /* 
    host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'equantom', */
})

db.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Mysql Connected..");
    }
})

module.exports = db;