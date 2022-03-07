const express = require('express');
const router = express.Router();
var session = require('express-session');
var db = require('../../../models');
// const register_controller = require('../../controllers/register.controller')

router.get('/', getRegister);
async function getRegister(req, res) {
    try {
        if (req.session.user && req.cookies.user_sid) {
            var getCurrentUserData = await db.csisStudent.findOne({ where: { uid: req.session.user.uid } });
            var getMatrials = await db.materials.findAll({ where: { level: getCurrentUserData.level } });
            // console.log(getMatrials)
            res.render("users/studentLayout/RegisterationPage.ejs", { currentUser: req.session.user, showMaterials: getMatrials })
        } else {
            res.redirect('/');
        }

    } catch (error) {
        res.error(error.message, error.status)
    }
}
// router.post('/users', template_controller.saveUser);

module.exports = router;
