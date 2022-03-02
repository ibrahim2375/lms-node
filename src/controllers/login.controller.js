require('dotenv').config();

const methods = {
    async getLogin(req, res) {
        try {
            res.render("Login/login.ejs")
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }