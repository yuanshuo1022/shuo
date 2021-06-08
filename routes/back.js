var express = require('express');
var router = express.Router();
var mysql =require('mysql');
var sd =require('silly-datetime');
// const { render } = require('ejs');
// const { event } = require('jquery');
const crypto = require('crypto');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ys3285739',
  database : 'loginregister'
});
 
connection.connect();


//后台登录get请求
router.get('/loginback.html', function(req, res, next) {
  res.render('loginback.html');
});


//后台新增页面get请求
  router.get('/article-add.html', function(req, res, next) {
    res.render('article-add.html');
  });


  //评论展示
  router.get('/article-comment.html', function(req, res, next) {
    AccountBack=req.session.AccoutBack;
    connection.query('select * from tab_comment',function(err,result){
      if(err){
       res.send("查询出错了",err)
      }else{
        res.render('article-comment.html',{datas:result});
        return 0;
      }
     
    })
  });


  //删除评论
  router.get('/article-comment.html/:id', function (req, res) {

    connection.query("delete from tab_comment where comment_id ="+req.params.id, function (err, rows) {
      if (err) {
          res.end('删除失败：' + err);
          return 0;
      } else {
          res.redirect('/article-comment.html');
        
      }
    })
  });


  //查询评论
  router.post('/commentSearch', function (req, res) {
    var idKind=req.body.comm_id;
    var c_id=req.body.c_id;
    var commentTen=req.body.commentTen;
    var sql = "select * from tab_comment where 1=1";
   
    
    if(idKind){
     c_sql= sql+= " and comment_typeid =" + idKind + "";
  }
  
    if (c_id) {
      c_sql=  sql += " and comment_id like'%" + c_id + "%'";
    }
    if (commentTen) {
      c_sql=  sql += " and comment like'%" + commentTen + "%'";
    }
     
    connection.query(c_sql, function (err, result) {
        if (err) {
            res.end("查询失败：", err)
        } else {
            res.render("article-comment.html", {datas:result,comm_id:idKind,c_id:c_id,commentTen:commentTen});
        }
    });
  });


  //资讯get请求
  router.get('/article-list.html', function(req, res, next) {
    AccountBack=req.session.AccoutBack;
    connection.query('select event_id,event_title,event_kind,event_cource,event_date,event_comment from tab_event',function(err,rs){
      if(err){
       res.send("查询出错了",err)
      }else{
        res.render('article-list',{datas:rs});
        return 0;
      }
     
    })
    
  });


  //后台登录页面post请求
  router.post('/loginback.html',function(req,res){
    let passwordBack=req.body.passwordBack;
    let AccountBack=req.body.AccountBack ;
    const hash = crypto.createHash('md5');
    hash.update(passwordBack);
   passwordBack=hash.digest('hex')
   var secherAdminSql='select * from tab_admin where  Admin_account=';
   var passSql='and Admin_password =';
   var namewordQuer=connection.escape(AccountBack);
   var passwordQuer=connection.escape(passwordBack)
   connection.query(secherAdminSql+namewordQuer+passSql+passwordQuer, (error, resu, fields)=> {
     if (error) {
     console.log(error);
     return 0;
    };
    // console.log(resu[0])
     if(resu[0]){
      req.session.AccoutBack=AccountBack;
      req.session.passwordBack=passwordBack
       res.json({"data":1});
      
     }else{
      
      res.json({"data":0});
      return 0;
     }
   });
 });
 
  router.get('/loginback.html', function(req, res, next) {
    res.render('loginback.html');
  });
 

 //后台新增页面
router.post('/article-add.html', function(req, res, next) {
  
   var add_title=req.body.add_title;
   var add_kind=req.body.add_kind;
   var add_cource =req.body.add_cource;
   var add_date  =sd.format(new Date(),'YYYY-MM-DD HH:mm')
   var add_massage=req.body.add_massage
 
 connection.query("insert into tab_event(event_title,event_kind,event_cource,event_date,event_massage) values(?,?,?,?,?)",[add_title,add_kind,add_cource,add_date,add_massage], function (err, rows) {
  if (err) {
      res.end('新增失败：' + err);
      return 0;
  } else {
      res.redirect('/article-list.html');
     
  }
})
  
});


//资讯删除
router.get('/article-list.html/:id', function (req, res) {

  connection.query("delete from tab_event where event_id ="+req.params.id, function (err, rows) {
    if (err) {
        res.end('删除失败：' + err);
        return 0;
    } else {
        res.redirect('/article-list.html');
      
    }
  })
});


//资讯修改
router.get('/article-list.html/Update/:id', function (req, res) {
  connection.query("select * from tab_event where event_id=" + req.params.id, function (err, result) {
      if (err) {
          res.end('修改页面跳转失败：' + err);
      } else {
          res.render("update", {up_data: result});       
      }
  });
});
router.post('/article-list.html/update', function (req, res) {
  var add_title = req.body.add_title;
  var add_kind= req.body.add_kind;
  var add_cource = req.body.add_cource;
  var add_id= req.body.add_id;
  
  
  connection.query("update tab_event set event_title='"+add_title+"',event_kind='"+add_kind+"',event_cource='"+add_cource+"' where event_id=" + add_id+"", function (err, rows) {
      if (err) {
          res.end('修改失败：' + err);
          return 0;
      } else {
          res.redirect('/article-list.html');
      }
  });
});


//资讯查询
router.post('/search', function (req, res) {
  var a_id=req.body.add_id;
  var a_title=req.body.add_title;
  var sql = "select * from tab_event where 1=1";
 
  
  if(a_id){
   a_sql= sql+= " and event_id =" + a_id + "";
}

  if (a_title) {
    a_sql=  sql += " and event_title like'%" + a_title + "%'";
  }
   
  connection.query(a_sql, function (err, result) {
      if (err) {
          res.end("查询失败：", err)
      } else {
          res.render("article-list.html", {datas:result,add_id:a_id,add_title:a_title});
      }
  });
});


module.exports = router;
