var express = require('express');
var router = express.Router();
var mysql =require('mysql');
const crypto = require('crypto');
const md5 = crypto.createHash('md5');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', function(req, res, next) {
  let user =new User(req.body.username,
      req.body.password,
    req.body.confirm_password,
    req.body.phone_number,
    req.body.email);
  var  addSql = 'INSERT INTO tab_user(user_name,password,user_phoneNO,user_email) VALUES(?,?,?,?)';
  var addSqlParams=[req.body.username,
 password = md5.update(req.body.password).digest('hex'),
    req.body.phone_number,
    req.body.email]
 
    // password = md5(md5(password).substr(4,7) + md5(password));
   var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
  connection.connect();
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     res.end("0");
     return;//如果失败了就直接return不会继续下面的代码
    }else{
    res.redirect('login')//如果注册成功就给客户端返回1
    // console.log("OK");
  }
});
console.log(user);
//res.end(JSON.stringify(response));


  });

module.exports = router;
