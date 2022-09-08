const router = require("express").Router();
const sequelize = require('../config/connection');
const { Recipes, User } = require('../models');

// Get for homepage.
router.get("/", async (req, res) => {
  res.render('homepage');
})

router.get("/dashboard", async (req, res) => {
  res.render('dashboard');
})

router.get("/recipes", async (req, res) => {
  res.render('recipes');
})

// Render single recipe
router.get("/recipe/:id", async (req, res) => {
  res.render('recipes');
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  

  module.exports = router;