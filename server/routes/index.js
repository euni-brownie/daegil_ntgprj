const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection');

router.get('/', (req,res)=> res.json({data:'this is index.'}));


router.get('/get/usersCount', (req,res)=>{
    db.query(`SELECT COUNT(*) FROM USER_INFO;`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });

});

router.post('/get/userById', (req,res)=>{
    db.query(`select * from USER_INFO WHERE user_id LIKE ${req.body.id}`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });

});

module.exports = router;