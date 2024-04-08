const router = require("express").Router();
const { Expense } = require("../../models")

// Get ALL
router.get("/", (req, res) => {
    Expense.findAll({
        where: {
            user_id: req.session.user_id // matches req session in user-routes
        }
    })
        .then(results => {
            console.log(results);
            res.json(results);
        });
})

// Get by month-year
//  /api/expenses/04/2024
router.get("/:month/:year", (req, res) => {
    // req.params.month ---> 4
    // req.params.year ----> 2024

    Expense.findAll({
        where: {
            user_id: req.session.user_id,
            date_created: {
                [Op.gte]: new Date(req.params.year, req.params.month - 1, 1),
                [Op.lte]: new Date(req.params.year, req.params.month, 0)
            }
            // new Date("2024", "03", 1) - starting
            // new Date("2024", "04", 0) - ending
        }
    })
    .then(results => {
        console.log(results);
        res.json(results);
    });

})

// Create one
router.post("/", (req, res) => {
    Expense.create({
        amount: req.body.amount,
        description: req.body.description,
    })
    .then(results => {
        console.log(results);
        res.json(results);
    });

})


// Update by ID
router.put("/:id", (req, res) => {

})

// Delete by ID
router.delete("/:id", (req, res) => {

})


module.exports = router;