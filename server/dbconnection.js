const mysql = require('mysql');
const connection = mysql.createPool({

    host:'54.180.136.6',
    port: 50473,
    user:'root',
    password:'ntgPRJ1115!',
    database: 'ntgprj_db',
});

module.exports=connection;
