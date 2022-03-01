const express = require('express');
const router = express.Router();

const template_controller = require('../../controllers/users.controller')

router.get('/', template_controller.getUsers);
// router.post('/users', template_controller.saveUser);

module.exports = router;
