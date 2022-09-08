const router = require("express").Router();
const sequelize = require('../config/connection');
const { Recipes, User } = require('../models');

// Get for homepage.
router.get("/", async (req, res) => {
  res.render('homepage');
})

router.get("/test", async (req, res) => {
  res.render('dashboard');
})

// Render single recipe
router.get("/recipe/:id", async (req, res) => {
  
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  

  module.exports = router;