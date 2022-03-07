const express = require('express');
const router = express.Router();
var session = require('express-session');
var db = require('../../../models/index');
// const template_controller = require('../../controllers/users.controller')

router.get('/', getUsers);
async function getUsers(req, res) {
    try {

        if (req.session.user && req.cookies.user_sid) {
            //  console.log(req.session.user.password);
         const  stuData = await db.csisStudent.findOne({ where: { uid: req.session.user.uid }});
        
            await db.users.findOne({ where: { email: req.session.user.email } }).then(function (user) {
                // console.log(user);
                if (!user) {
                    res.redirect('/')
                } else {
                   
                    res.render("users/student.ejs", { currentUser: req.session.user, userData: user , studentData:stuData});
                }
            });

        } else {
            res.redirect('/login');
        }

    } catch (error) {
        res.error(error.message, error.status)
    }
}


module.exports = router;
