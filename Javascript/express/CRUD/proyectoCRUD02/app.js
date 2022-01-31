const express = require('express');
const app = express();

var createRouter = require('./routes/create');
var readRouter = require('./routes/index');
// var upgradeRouter = require('./routes/upgrade');
// var deleteRouter = require('./routes/delete');


app.listen('3000')


app.use('/', readRouter);
app.use('/create', createRouter);
// app.use('/upgrade', upgradeRouter);
// app.use('/delete', deleteRouter);
// app.use('/orders', ordersRouter);

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
