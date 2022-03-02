require('dotenv').config();

const methods = {
    async getTables(req, res) {
        try {
            res.render("users/studentLayout/TablePage.ejs")
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }