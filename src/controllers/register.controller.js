require('dotenv').config();


const methods = {
    // async getRegister(req, res) {
    //     try {
    //         const getCurrentUserData = await db.csisStudent.findOne({ where: { uid: req.session.user.uid }});
    //         res.render("users/studentLayout/RegisterationPage.ejs", { currentUser: req.session.user })
    //     } catch (error) {
    //         res.error(error.message, error.status)
    //     }
    // }
}

module.exports = { ...methods }