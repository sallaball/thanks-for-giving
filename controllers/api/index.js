const router = require("express").Router()
const userRoutes = require("./user-routes")
const recipeRoutes = require("./recipe-routes")
// const dashboardRoutes = require ("./dashboard-routes")

router.use("/user",userRoutes)

router.use("/recipe", recipeRoutes)
// router.use("/api",apiRoutes)
module.exports = router