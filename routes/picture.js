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

//图片展示
router.get('/picture-list.html', function(req, res, next) {
    connection.query('select * from tab_views',function(err,result){
        if(err){
         res.send("图片展示出错了",err)
        }else{
          res.render('picture-list.html',{data:result});
        }
       
      })
 
  });
    
  router.get('/picture-show.html', function(req, res, next) {
    res.render('picture-show.html');
  });
  router.get('/picture-add.html', function(req, res, next) {
    res.render('picture-add.html');
  });


  //新增图片
  router.post('/picture-add.html', function(req, res, next) {
    var p_kind =req.body.p_kind;
    var p_img =req.body.p_img;  
    var p_name=req.body.p_name;  
    var p_tags=req.body.p_tags;  
    var p_time=req.body.p_time;  
   
  connection.query("insert into tab_views(view_kind,view_img,view_name,view_tags,view_time) values(?,?,?,?,?)",[p_kind,p_img,p_name,p_tags,p_time], function (err, rows) {
   if (err) {
       res.end('新增失败：' + err);
   } else {
       res.redirect('/picture-list.html');
   }
 })
   
  });


//删除图片
router.get('/picture-list.html/:id', function (req, res) {

    connection.query("delete from tab_views where view_id ="+req.params.id, function (err, rows) {
      if (err) {
          res.end('删除失败：' + err);
      } else {
          res.redirect('/picture-list.html');
      }
    })
  });


// 修改图片
router.get('/picture-list.html/imgUpdate/:id', function (req, res) {

    connection.query("select * from tab_views where view_id=" + req.params.id, function (err, result) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("imgUpdate", {img_data: result});       
        }
    });
  });
  router.post('/picture-list.html/imgUpdate', function (req, res) {
    var img_id = req.body.img_id;
    var img_img= req.body.img_img;
    var img_name = req.body.img_name;
    var img_tags  =req.body.img_tags;
    var img_kind  =req.body.img_kind;
    
    
    connection.query("update tab_views set view_img='"+img_img+"',view_name='"+img_name+"',view_tags='"+img_tags+"',view_kind='"+img_kind+"' where view_id=" + img_id+"", function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/picture-list.html');
        }
    });
  });

  
//查询图片
router.post('/imgSearch', function (req, res) {
    var S_id=req.body.search_id;
    var S_name=req.body.search_name;
    var sql = "select * from tab_views";
   
    
    if(S_id){
     sql+= " and view_id like'%" + S_id + "%'";
  }
  
    if (S_name) {
        sql += " and view_name like'%" + S_name + "%'";
    }
  
    
    S_sql = sql.replace("and","where");
    connection.query(S_sql, function (err, result) {
        if (err) {
            res.end("查询失败：", err)
        } else {
            res.render("picture-list.html", {data:result,view_id:S_id,view_name:S_name});
        }
    });
  });
  module.exports = router;