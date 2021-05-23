var express = require('express');
var router = express.Router();
var mysql =require('mysql');
const crypto = require('crypto');
const md5 = crypto.createHash('md5');

router.get('/loginback', function(req, res, next) {
  res.render('loginback');
});
router.get('/admin-add', function(req, res, next) {
    res.render('admin-add');
  });
  router.get('/admin-list', function(req, res, next) {
    res.render('admin-list');
  });
  router.get('/article-add', function(req, res, next) {
    res.render('article-add');
  });
  router.get('/article-list', function(req, res, next) {
    res.render('article-list');
  });
  router.get('/indexBack', function(req, res, next) {
    res.render('indexBack');
  });
  router.get('/loginback', function(req, res, next) {
    res.render('loginback');
  });
  router.get('/picture-add', function(req, res, next) {
    res.render('picture-add');
  });
  router.get('/picture-list', function(req, res, next) {
    res.render('picture-list');
  });
  router.get('/picture-show', function(req, res, next) {
    res.render('picture-show');
  });

  //POST
  router.post('/loginback',function(req,res){
    let usernameBack=req.body.usernameBack;
    let passwordBack=req.body.passwordBack;
    hash.update(passwordBack);
    passwordBack=hash.digest('hex')
   
  
    var connection = mysql.createConnection({
     host     : 'localhost',
     user     : 'root',
     password : 'ys3285739',
     database : 'loginregister'
   });
    
   connection.connect();
   var secherAdminSql='select * from tab_admin where Admin_account=';
   var passSql='select * from tab_admin where Admin_password =';
   var nameQuer=connection.escape(usernameBack);
   var passQuer=connection.escape(passwordBack)
   connection.query(secherAdminSql+nameQuer&&passSql+passQuer, (error, results, fields)=> {
     if (error) throw error;
     console.log(results);
     
     if(results[0]){
       res.redirect('/indexBack');
     }else{
       res.redirect('/error');
     }
  
   });
 });

module.exports = router;
