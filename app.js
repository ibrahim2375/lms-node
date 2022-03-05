const express = require('express');
//new
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// const db = require('./models');
//new

const app = express();
require('dotenv').config();
// const port = process.env.PORT
// const host = process.env.URL
const port = 3000
const host = '127.0.0.1'


//new
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
//new

const createError = require('http-errors');

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs')


//new
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});
var hbsContent = { userName: '', loggedin: false, title: "You are not logged in today", body: "Hello World" };

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/');
    } else {
        next();
    }
};

//new

// call sysc()
// const db = require("./models");
// db.sequelize.sync();

//routes

const indexRouter = require('./src/routes/index');

app.use('/', indexRouter);

//new
//connect to db edit
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//connect to db edit
//new

//image
app.use(express.static("public"));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    console.log("error", err)
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
});


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

