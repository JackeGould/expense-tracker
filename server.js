const express = require("express");
const session = require('express-session');
const logger = require('morgan');
const path = require('path');
const sequelize = require("./config/connections")
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3001;

const apiRoutes = require("./controllers/api")
const htmlRoutes = require("./controllers/html-routes")

// Configure session middleware
app.use(session({
    secret: 'your-secret-key', // Add a secret key for session encryption
    cookie: { secure: false }, // Set cookie options as needed
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize, // Pass Sequelize instance to the store
    })
  }));

// Inform Express.js on which template engine to use
const hbs = exphbs.create({ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Middlewares
app.use(express.json()); // receiving json body
app.use(express.urlencoded({ extended: true })); // allows server to understand/ parse the body
app.use(express.static(path.join(__dirname, 'public'))); // allows server to serve everything in the public folder

app.use("/api", apiRoutes) // compare the pathname of request - /api ---> checks all api routes
app.use("/", htmlRoutes) // if not /api --> HTML routes

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });