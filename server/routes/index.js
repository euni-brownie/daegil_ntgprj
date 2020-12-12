const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

router.get('/', (req,res)=> res.json({data:'this is index.'}));


router.get('/get/usersCount', (req,res)=>{
    db.query(`SELECT COUNT(*) as count FROM USER_INFO`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });

});

router.get('/get/videoURL', (req,res)=>{
    db.query(`SELECT url FROM YOUTUBE_URL WHERE id LIKE '0'`, (err, data)=>{
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
    db.query(`select * from USER_INFO WHERE user_id LIKE ${req.body.user_id}`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });

});

router.post('/get/existUser', (req,res)=>{
    db.query(`select COUNT(*) as count from USER_INFO WHERE user_id LIKE ${req.body.user_id}`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });

});

router.post('/get/userByIdx', (req,res)=>{
    db.query(`select * from USER_INFO WHERE idx LIKE ${req.body.idx}`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});
router.post('/get/userByRownum', (req,res)=>{
    db.query(`select * from USER_INFO where (@rownum:=0)=0 and (@rownum:=@rownum+1)= ${req.body.rownum}`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});



router.post('/get/checkedTodayById', (req,res)=>{
    db.query(`SELECT COUNT(*) AS count FROM USER_DATA WHERE user_id LIKE ${req.body.user_id} AND checked_date LIKE CURDATE()`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });    
});

router.post('/get/totalCheckedCount', (req,res)=>{
    db.query(`SELECT COUNT(*) As count FROM USER_DATA WHERE user_id LIKE ${req.body.user_id};`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });     
 
});

router.post('/get/rankById', (req,res)=>{
    // eslint-disable-next-line no-unused-expressions
    let str = `SELECT R.rank FROM
                (SELECT A.*, 
                        CASE
                        WHEN @prev_value = COUNT THEN @ROWNUM
                        WHEN @prev_value := COUNT THEN @ROWNUM := @ROWNUM + 1 
                        END AS rank FROM
                        (SELECT user_id, COUNT(checked_date) AS count FROM USER_DATA GROUP BY user_id ORDER BY COUNT desc) A, 
                        (SELECT @ROWNUM := 0, @prev_value := NULL ) B) R
                        WHERE R.user_id LIKE ${req.body.user_id};`
                        
    db.query(str, (err,data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        }else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });

});

/* insert */

router.post('/insert/user', (req,res)=>{
    db.query(`INSERT INTO USER_INFO (user_id, user_nickname, user_image_url, last_login_date, sign_up_date, access_token)
                 VALUES ('${req.body.user_id}', '${req.body.user_nickname}', '${req.body.user_image_url}', NOW(), NOW(), '${req.body.access_token}')`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });     
 
});

router.post('/insert/today', (req,res)=>{
    db.query(`INSERT INTO USER_DATA (user_id, checked_date, user_nickname) 
                VALUES ('${req.body.user_id}', CURDATE(), '${req.body.user_nickname}')`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
 
});
/* update */

router.post('/update/checkin', (req,res)=>{
    db.query(`UPDATE USER_INFO SET last_login_date = NOW() WHERE user_id=${req.body.user_id}`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
 
});

router.post('/update/changedInfo', (req,res)=>{
    db.query(`UPDATE USER_INFO SET user_nickname=${req.body.user_nickname}, 
                user_image_url=${req.body.user_image_url} WHERE  user_id=${req.body.user_id}`, (err, data)=>{
        if(!err){
            console.log(err, data);
            res.send(data);
        } else{
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
 
});

router.post('/update/accessToken', (req,res)=>{
    db.query(`UPDATE USER_INFO SET access_token =${req.body.access_token} WHERE  user_id=${req.body.user_id}`, (err, data)=>{
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