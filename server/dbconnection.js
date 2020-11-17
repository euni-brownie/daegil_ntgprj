const mysql = require('mysql');
const connection = mysql.createPool({

    host:'54.180.195.102',
    port: 58643,
    user:'root',
    password:'ntgPRJ1115!',
    database: 'ntgprj_db',
});

module.exports=connection;
