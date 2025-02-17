const express = require('express');
const router = express.Router();

var session = require('express-session');
var User = require('../../../models');


// const user = require('../../../models/user');
// const login_controller = require('../../controllers/login.controller')
// const check_controller = require('../../controllers/loginCheck.controller')
const app = express();
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/');
    } else {
        next();
    }
};
router.get('/', sessionChecker, getLogin);
router.post('/', getUser);



async function getLogin(req, res) {
    try {
        res.render('Login/login.ejs');

    } catch (error) {
        res.error(error.message, error.status)
    }
}
async function getUser(req, res) {
    try {
        var username = req.body.email,
            password = req.body.password;
        //sequelize check user
        await User.users.findOne({ where: { email: username, password: password } }).then(function (user) {
            if (!user) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/');
            }
        });

    } catch (error) {
        res.error(error.message, error.status)
    }
}
//new


module.exports = router;
