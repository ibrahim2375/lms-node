require('dotenv').config();

const methods = {
    async getExams(req, res) {
        try {
            res.render("users/studentLayout/ExamPage.ejs")
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }