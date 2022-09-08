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