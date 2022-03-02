require('dotenv').config();

const methods = {
    async getHome(req, res) {
        try {
            res.render("index.ejs")
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }