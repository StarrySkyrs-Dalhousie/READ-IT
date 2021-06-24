var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var clientRouter = require('./routes/client.routes');
var lineRouter = require('./routes/line.routes');
var partRouter = require('./routes/part.routes');
var purchaseOrderRouter = require('./routes/order.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors()) // Use this after the variable declaration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/clients', clientRouter);
app.use('/parts', partRouter);
app.use('/lines', lineRouter);
app.use('/pos', purchaseOrderRouter);

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
