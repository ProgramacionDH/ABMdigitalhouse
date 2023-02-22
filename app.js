const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const productosRouter = require('./src/routes/usuarios');

var app = express();

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', productosRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
})

//listen//

app.listen(3000, () => {
  console.log("servidor corriendo puerto 3000");
});

module.exports = app;