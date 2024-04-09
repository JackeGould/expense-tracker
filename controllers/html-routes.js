const router = require("express").Router(); // returns factory function (.Router) static method
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
    return res.render("profile", {
        loggedIn: true
    })
})

module.exports = router;

