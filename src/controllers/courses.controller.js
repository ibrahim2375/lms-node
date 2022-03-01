require('dotenv').config();

const methods = {
    async getCourses(req, res){
        try {
            res.render("courses/list.ejs", {courses : []})
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }