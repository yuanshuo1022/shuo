var express = require('express');
var router = express.Router();
var mysql =require('mysql');
const crypto = require('crypto');
const { render } = require('ejs');
const { event } = require('jquery');
const md5 = crypto.createHash('md5');

router.get('/loginback.html', function(req, res, next) {
  res.render('loginback.html');
});
router.get('/admin-add.html', function(req, res, next) {
    res.render('admin-add.html');
  });
  router.get('/admin-list.html', function(req, res, next) {
    res.render('admin-list.html');
  });
  router.get('/article-add.html', function(req, res, next) {
    res.render('article-add.html');
  });
  router.get('/article-list.html', function(req, res, next) {
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'ys3285739',
      database : 'loginregister'
    });
     
    connection.connect();
    connection.query('select event_id,event_title,event_kind,event_cource,event_date from tab_event',function(err,rs){
      if(err){
       res.send("查询出错了",err)
      }else{
        res.render('article-list',{datas:rs});
      }
      console.log(rs);
    })
    
  });
  router.get('/indexBack.html', function(req, res, next) {
    res.render('indexBack.html');
    res.send(str);
  });
  router.get('/loginback.html', function(req, res, next) {
    res.render('loginback.html');
  });
  router.get('/picture-add.html', function(req, res, next) {
    res.render('picture-add.html');
  });
  router.get('/picture-list.html', function(req, res, next) {
    res.render('picture-list.html');
  });
    
  router.get('/picture-show.html', function(req, res, next) {
    res.render('picture-show.html');
  });

  //POST
  router.post('/loginback.html',function(req,res){
    let passwordBack=req.body.passwordBack;
    let AccountBack=req.body.AccountBack ;
    console.log("账号是"+AccountBack);
    console.log("密码是"+passwordBack);
    var connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : 'ys3285739',
     database : 'loginregister'
   });
    
   connection.connect();
   var secherAdminSql='select * from tab_admin where  Admin_account=';
   var passSql='and Admin_password =';
   var namewordQuer=connection.escape(AccountBack);
   var passwordQuer=connection.escape(passwordBack)
   connection.query(secherAdminSql+namewordQuer+passSql+passwordQuer, (error, resu, fields)=> {
     if (error) {
     console.log(error);
    };
    console.log(resu[0])

  
     
     if(resu[0]){
       res.json({"data":1});
     }else{
      
       console.log("账号或密码错误");
       
     }
  
   });
 });

 //后台新增页面

 router.post('/article-add.html', function(req, res, next) {
  
   var add_title=req.body.add_title;
   var add_kind=req.body.add_kind;
   var add_cource =req.body.add_cource;
   var add_date  =req.body.add_date;
  
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
   
  connection.connect();
 connection.query("insert into tab_event(event_title,event_kind,event_cource,event_date) values(?,?,?,?)",[add_title,add_kind,add_cource,add_date], function (err, rows) {
  if (err) {
      res.end('新增失败：' + err);
  } else {
      res.redirect('/article-list.html');
  }
})
  
});

//删除
router.get('/article-list.html/:id', function (req, res) {
 
 
  
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
   
  connection.connect();
  connection.query("delete from tab_event where event_id ="+req.params.id, function (err, rows) {
    if (err) {
        res.end('删除失败：' + err);
    } else {
        res.redirect('/article-list.html');
    }
  })
});
//修改
router.get('/article-list.html/Update/:id', function (req, res) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
   
  connection.connect();

  connection.query("select * from tab_event where event_id=" + req.params.id, function (err, result) {
      if (err) {
          res.end('修改页面跳转失败：' + err);
      } else {
          res.render("update", {up_data: result});       //直接跳转
      }
  });
});
router.post('/article-list.html/update', function (req, res) {
  var add_title = req.body.add_title;
  var add_kind= req.body.add_kind;
  var add_cource = req.body.add_cource;
  var add_id= req.body.add_id;
  
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
   
  connection.connect();
  connection.query("update tab_event set event_title='"+add_title+"',event_kind='"+add_kind+"',event_cource='"+add_cource+"' where event_id=" + add_id+"", function (err, rows) {
      if (err) {
          res.end('修改失败：' + err);
      } else {
          res.redirect('/article-list.html');
      }
  });
});
//查询
router.post('/search', function (req, res) {
  var a_id=req.body.add_id;
  var a_title=req.body.add_title;
  var sql = "select * from tab_event";
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
   
  connection.connect();
  
  if(a_id){
   sql+= " and event_id like'%" + a_id + "%'";
}

  if (a_title) {
      sql += " and event_title like'%" + a_title + "%'";
  }

  
  a_sql = sql.replace("and","where");
  connection.query(a_sql, function (err, result) {
      if (err) {
          res.end("查询失败：", err)
      } else {
          res.render("article-list.html", {datas:result,add_id:a_id,add_title:a_title});
      }
  });
});
module.exports = router;
