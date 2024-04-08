const router = require("express").Router();

// Link user routes
const userRoutes = require("./user-routes")
const incomeRoutes = require("./income-routes")
const expenseRoutes = require("./expense-routes");


router.use("/users", userRoutes)
// router.use("")  - for income
router.use("/expenses", expenseRoutes)


module.exports = router;