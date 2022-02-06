const express = require('express');
const { loggers } = require('winston');
const morgan = require('morgan')

// var upgradeRouter = require('./routes/upgrade');
// var deleteRouter = require('./routes/delete');
const app = express();
var PORT = 3000;

app.use(express.json());


app.listen(PORT)

const moviesRouter = require('./routes/moviesRouter')
app.use('/movies', moviesRouter)

app.get('/', (req, res) => {
  res.send('Bienvenido a Express')
});


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
