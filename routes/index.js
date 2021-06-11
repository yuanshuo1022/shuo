var express = require('express');
var mysql =require('mysql');

var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ys3285739',
  database : 'loginregister'
});
 
connection.connect();
router.get('/', function(req, res, next) {
    user=req.session.user;
  connection.query('select * from views_tab_img LEFT JOIN tab_indicator on tab_indicator.indicator_id=views_tab_img.event_id',function(err,rs){
    if(err){
     res.send("页面展示失败",err)
    }else{
      res.render('index',{datas:rs});
  
    }
 
  })
 
});
router.post('/', function(req, res, next) {

});

module.exports = router;
