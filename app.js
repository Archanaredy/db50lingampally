var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Year = require("./models/Year");

const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true});

async function recreateDB() {

    // Delete everything
  
    await Year.deleteMany();
  
    let instance1 = new Year({Day: "Wed",Week: "27",Month: "November"});
  
  
  
    instance1.save(function (err, doc) {
  
      if (err) return console.error(err);
  
      console.log("First object saved")
  
    });
  
  
  
    let instance2 = new Year({Day: "Mon",Week: "17",Month: "May"});
  
    instance2.save(function (err, doc) {
  
      if (err) return console.error(err);
  
      console.log("Second object saved")
  
    });
  
  
  
    let instance3 = new Year({Day: "thurs", Week: "11",Month: "April"});  
  
    instance3.save(function (err, doc) {
  
      if (err) return console.error(err);
  
      console.log("Third object saved")
  
    });
  
  }
  
  
  
  let reseed = true;
  
  if (reseed) {
  
    recreateDB();
  
  }

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var YearRouter = require('./routes/Year');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Year', YearRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/', resourceRouter);

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
});

module.exports = app;
