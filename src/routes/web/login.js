const express = require('express');
const router = express.Router();

const login_controller = require('../../controllers/login.controller')

router.get('/', login_controller.getLogin);
// router.post('/users', template_controller.saveUser);

module.exports = router;
