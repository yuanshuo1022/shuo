var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const crypto = require('crypto');
const hash = crypto.createHash('md5');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
  // next();
});
router.post('/',function(req,res){
   let username=req.body.username;
   let password=req.body.password;
   hash.update(password);
   password=hash.digest('hex')
  
 
   var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
   
  connection.connect();
  var secherSql='select * from tab_user where user_name=';
  var passSql='select * from tab_user where password =';
  var nameQuer=connection.escape(username);
  var passQuer=connection.escape(password)
  connection.query(secherSql+nameQuer&&passSql+passQuer, (error, results, fields)=> {
    if (error) throw error;
    console.log(results);
    
    if(results[0]){
      res.redirect('/index');
    }else{
      res.redirect('/error');
    }
 
  });
});


module.exports = router;
