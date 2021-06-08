var express = require('express');
var router = express.Router();
var mysql =require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ys3285739',
  database : 'loginregister'
});
 
connection.connect();
router.get('/information',function(req,res){
  user=req.session.user;
  connection.query('select * from tab_event LEFT JOIN tab_comment on tab_event.event_id=tab_comment.comment_id union SELECT * from tab_event RIGHT JOIN tab_comment on tab_event.event_id=tab_comment.comment_id ',function(err,result){
    if(err){
     res.send("页面展示失败",err)
    }else{
      res.render('information',{data:result});
    }
  // console.log(result);
  })

  })
  module.exports = router;