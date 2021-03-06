var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs    = require('ejs');
var session=require('express-session');
const crypto = require('crypto');
const md5 = crypto.createHash('md5');
var flash = require('connect-flash')
 

 
global.jQuery = require('jquery');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter=require('./routes/register');
var backRouter=require('./routes/back');
var pictureRouter=require('./routes/picture');
var informationRouter=require('./routes/information');
var commentRouter=require('./routes/comment');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html',ejs.__express);
app.set('view engine','html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("123"));
app.use(session({
secret:"123",
cookie:{maxAge:6000*20*8},
resave:false,
saveUninitialized:true
  
}));
app.use(flash());
//设置flash
app.use(function(req, res, next){
  res.locals.error = req.flash('error') || "";
  res.locals.success = req.flash('success') || "";
  next();
});

// //拦截器 
       

app.use(function (req, res, next) {
  if (req.session.user&&req.session.user!=undefined&&req.originalUrl!="/imgUpdate.html"&&req.originalUrl!="/indexBack.html"&&req.originalUrl!="/picture-add.html"&&req.originalUrl!="/picture-list.html"&&req.originalUrl!="/pixture-show"&&req.originalUrl!="/article-add.html"&&req.originalUrl!="/article-list.html"&&req.originalUrl!="/article-comment.html") {  // 判断用户是否登录
    next();
  } else if(req.session.AccoutBack&&req.session.AccoutBack!=undefined){
    next();
  }else{
    // 解析用户请求的路径
    var arr = req.url.split('/');
    // console.log("arr.length为是"+arr.length)
    // 去除 GET 请求路径上携带的参数
    for (var i = 0, length = arr.length; i < 1; i++) {
      arr[i] = arr[i].split('?')[0];
    }
    // 判断请求路径是否为根、登录、注册、登出，如果是不做拦截
   if ( arr[1]=="static"||arr[1]=="lib"||arr[1]=="images"||arr[1]=="stylesheets"||arr[1]=="javascripts"||arr[1] == 'loginback.html' || (arr[1] == 'register' || arr[1] == 'login')) {
      next();
    } else {  // 登录拦截
      req.session.originalUrl = req.originalUrl ? req.originalUrl : null;  // 记录用户原始请求路径
      
      req.flash('error', '登录才能进入网页哦');
      
      res.redirect('/login');  // 将用户重定向到登录页面
 
    }
  }
 
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/',informationRouter);
app.use('/',backRouter);
app.use('/',pictureRouter);
app.use('/comment',commentRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
 
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
 
 
});

module.exports = app;
