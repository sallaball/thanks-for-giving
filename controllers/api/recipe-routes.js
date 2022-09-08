const router = require("express").Router()
const withAuth = require("../../utils/auth")

// Hosting new recipe to database
router.post("/", withAuth, async (req, res) => {
})

// Delteing a saved recipe
router.delete("/", withAuth, async (req, res) => {
})

// for Saving recipe to database
router.post("/saved/:userid/:recipeid", withAuth, async (req, res) => {
})

// for retrieveing user saved recipe
router.get("/saved/:userid", withAuth, async (req, res) => {
})

//mock
router.get("/hellow", withAuth, async (req, res) => {
    res.send("hello")
} )

module.exports = router