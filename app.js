// requiring packages
var hbs = require('express-hbs');
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// assigning routes
var index = require('./routes/index');
var people = require('./routes/people');
var news = require('./routes/news');
var contact = require('./routes/contact');
var practiceprofile = require('./routes/practice-profile');
var sectorsservices = require('./routes/sectors-services');
var projects = require('./routes/projects');

// assign port
var app = express();
var port = (process.env.PORT || 80);
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('port', port);

// see get and post requests in console and set up public directory
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));

// set up directory for the layout and the partials
app.engine('hbs', hbs.express4({
    defaultLayout: path.join(__dirname, '/views/layout.hbs'),
    partialsDir: path.join(__dirname, '/views/partials')
}));

// use route (javascript file) for said page (route says what layout and view (hbs files) to use
app.use('/', index);
app.use('/people', people);
app.use('/news', news);
app.use('/contact', contact);
app.use('/practice-profile', practiceprofile);
app.use('/sectors-services', sectorsservices);
app.use('/projects', projects);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler (displays errors on the 404 page)
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// start app on var port
server.listen(port);
module.exports = app;
