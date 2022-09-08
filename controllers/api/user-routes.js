const router = require("express").Router()
const { User } = require("../../models")

// This is for sign up profiles
router.post("/", async (req, res) => {
    // User.create goes here
    console.log(req.body)
    User.create(req.body)
    .then(newUser => {
        return res.json(newUser)
    })
})

// This is for login use
router.post("/login", async (req, res) => {
    // User.findONE goes here
    User.findOne({
        where: {
          email: req.body.email
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that email address!' });
          return;
        }
    
        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
});
})

// This is for loggin out profiles
router.post("/logout", async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})
module.exports = router;