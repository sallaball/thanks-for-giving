const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipes, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('===================');
    Recipes.findAll({
        where: {
            user_id: req.session.user_id
        },
        
    })
})
//example
module.exports = router;