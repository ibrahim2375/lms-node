require('dotenv').config();

const methods = {
    async getRegister(req, res) {
        try {
            res.render("users/studentLayout/RegisterationPage.ejs")
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }