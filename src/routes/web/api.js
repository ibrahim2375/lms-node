const express = require('express');
const router = express.Router();
const db = require('../../../models');
const session = require('express-session');
const { models } = require('sequelize');

router.get('/', (req, res) => {
    // db.Allusers.findAll().then((user) => {
    //     res.send(user)
    //     // console.log(user)
    // });
    //    const ta1 =  db.Allusers.hasMany(db.User, { foreignKey: 'email' })
    //     const ta2 =  db.User.belongsTo(db.Allusers, { foreignKey: 'email' })
    //     db.User.findAll({
    //         // attributes:['Name','email'],
    //         include: [
    //             { 
    //                 model: db.Allusers   ,

    //             }

    //         ],
    //         // limit: 1
    //     }).then((user) => {
    //         res.send(user)
    //     })

    // const tab1 = db.Allusers.associate = (models) => {
    //     db.Allusers.hasMany(models.students);
    // }
    // const tab2 = db.students.associate = (models) => {
    //     db.students.belongsTo(models.Allusers);
    // }
    // db.students.findAll({ include:[ { model: db.Allusers}]})
    //     .then((res1) => {
    //         console.log(res1);
    //         res.send(res1);
    //     })
    res.send(req.session.user);
});

// // router.post('/users', template_controller.saveUser);

module.exports = router;