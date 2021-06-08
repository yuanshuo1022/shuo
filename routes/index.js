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
  connection.query('select * from tab_event  left JOIN tab_views on tab_event.event_id=tab_views.view_id left JOIN tab_indicator on tab_event.event_id=tab_indicator.indicator_id left JOIN tab_title on tab_event.event_id=tab_title.title_id union select * from tab_event  left JOIN tab_views on tab_event.event_id=tab_views.view_id RIGHT  JOIN tab_indicator on tab_event.event_id=tab_indicator.indicator_id left JOIN tab_title on tab_event.event_id=tab_title.title_id  union  select * from tab_event  RIGHT  JOIN tab_views on tab_event.event_id=tab_views.view_id left  JOIN tab_indicator on tab_event.event_id=tab_indicator.indicator_id left JOIN tab_title on tab_event.event_id=tab_title.title_id  ',function(err,rs){
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
