require('dotenv').config();

const methods = {
    async getRecords(req, res) {
        try {
            res.render("users/studentLayout/AcadmicRecords.ejs")
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }