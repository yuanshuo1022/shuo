var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ys3285739',
    database : 'loginregister'
  });
   
  connection.connect();
  
});
module.exports = router;
