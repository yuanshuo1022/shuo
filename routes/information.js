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
  connection.query('select event_img,event_title,event_date,event_massage,event_tumb,event_comment from tab_event',function(err,result){
    if(err){
     res.send("页面展示失败",err)
    }else{
      res.render('information',{data:result});
    }
  // console.log(result);
  })

  })
  module.exports = router;