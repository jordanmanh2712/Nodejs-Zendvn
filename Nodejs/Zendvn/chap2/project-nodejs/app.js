//File system express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//File 3rd services
//Express
var expressLayouts = require('express-ejs-layouts');
//MongoDB
var mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://admin:271217@cluster0-qhcwm.gcp.mongodb.net/Item?retryWrites=true&w=majority',
);
var db = mongoose.connection;
db.on('error', () => {
    console.log('connection error123');
});
db.once('open', () => {
    // we're connected!
    console.log('connected!');
});

var kittySchema = new mongoose.Schema({
    name: String,
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: '123' });
silence.save(function(err, silence) {
    if (err) return console.error(err);
});

var Kitten = mongoose.model('Kitten', kittySchema);

//File myself
const systemConfig = require('./configs/system');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//System config local variable
app.locals.systemConfig = systemConfig;

//Setup router front end va back end
app.use('/', require('./routes/frontend/index'));
app.use(`/${systemConfig.prefixAdmin}`, require('./routes/backend/index'));

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
    res.render('pages/error', { pageTitle: 'Page not found!' });
});

module.exports = app;