const router = require("express").Router();
const sequelize = require('../config/connection');
const { Recipes, User } = require('../models');

// Get for homepage.
router.get("/", async (req, res) => {
  res.render('homepage');
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
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  module.exports = router;