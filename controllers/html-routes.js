const router = require("express").Router(); // returns factory function (.Router) static method
const { Expense} = require("../models")


router.get("/", (req, res) => {
    return res.render("homepage")
})

router.get("/login", (req, res) => {
    return res.render("login")
})

router.get("/profile", (req, res, next) => { // custom middleware!!
    if (req.session.loggedIn) {  // checks and sees if user is authenticated
        return next() // if they are, they can access the profile page (line 16) next --> done with middleware, continue request
    } // request stops if it doesn't go to the next -- still sends response
    res.redirect("/login") // redirects to login >> authentication
}, (req, res) => {

    Expense.findAll({
        where: {
            user_id: req.session.user_id // matches req session in user-routes
        },
        raw:true,
        nest:true
        //defaulted to return plain, bold json instead of getting an array of instances / map over them
    })
        .then(results => {
            console.log(results);
            // res.json(results);
            // serialize
            // const expenses = results.map(result => result.get({}))

            return res.render("profile", {
                loggedIn: true,
                expenses: results
            })

        });



})

module.exports = router;


