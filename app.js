var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs    = require('ejs');
var session=require('express-session');
const crypto = require('crypto');
const md5 = crypto.createHash('md5');
 
// var jsdom = require('jsdom');
// const {JSDOM} = jsdom;
// const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
// global.document = document;
// global.window = document.defaultView;
 
global.jQuery = require('jquery');
// const $= require('jquery')(require("jsdom").jsdom().defaultView);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter=require('./routes/register');
var backRouter=require('./routes/back');
var pictureRouter=require('./routes/picture')

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
cookie:{maxAge:6000*20*3},
resave:false,
saveUninitialized:true
  
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
// app.use('/home',homeRouter);
app.use('/',backRouter);
app.use('/',pictureRouter);
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
  // console.log(err);
 
 
});

module.exports = app;
