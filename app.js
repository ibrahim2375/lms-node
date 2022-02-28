const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT
const host = process.env.URL

const path = require('path');

const createError = require('http-errors');


//routes
const indexRouter = require('./src/routes/index');


app.use('/', indexRouter);

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
    res.json(err);
});


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});