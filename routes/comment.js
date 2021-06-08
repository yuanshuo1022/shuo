var express = require('express');
var mysql =require('mysql');
var sd =require('silly-datetime');
var router = express.Router();


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ys3285739',
  database : 'loginregister'
});
 
connection.connect();
router.get('/', function (req, res) {
  connection.query('select * from tab_event LEFT JOIN tab_comment on tab_event.event_id=tab_comment.comment_typeid union SELECT * from tab_event RIGHT JOIN tab_comment on tab_event.event_id=tab_comment.comment_typeid ',function(err,result){
    if(err){
     res.send("页面展示失败",err)
    }else{
      res.render('comment',{data:result});
    }
  })
});

router.get('/:id',function(req,res){
  user=req.session.user;
   connection.query("select * from tab_event LEFT JOIN tab_comment on tab_event.event_id=tab_comment.comment_typeid where tab_event.event_id = "+req.params.id+" union SELECT * from tab_event RIGHT JOIN tab_comment on tab_event.event_id=tab_comment.comment_typeid  where  tab_event.event_id = "+req.params.id+"",function(err,result){
    if (err) {
      res.end('获取评论失败：' + err);
  } else {
    res.render('comment',{data:result});
  }
   })
  });
router.post('/',function(req,res){
  var comment=req.body.comment
  user=req.session.user;
  var c_date=sd.format(new Date(),'YYYY-MM-DD HH:mm');
var comm_id=req.body.comm_id
    connection.query("insert into tab_comment(comment_typeid,comment_user,comment,comment_date) values(?,?,?,?)",[comm_id,user,comment,c_date],function(err,result){
      if (err) {
        res.end('评论失败：' + err);
    } else {
        res.redirect("/comment/"+comm_id);
        console.log(result)
    }
    })
});



module.exports = router;