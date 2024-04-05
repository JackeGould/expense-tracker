import express from 'express';
import session from 'express-session';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { dirname } from "dirname-filename-esm"
import exphbs from 'express-handlebars';
const hbs = exphbs.create({  });
// import { SequelizeStore } from 'connect-session-sequelize';

import usersRouter from './routers/users';

// app
const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key', // Add a secret key for session encryption
  cookie: { secure: false }, // Set cookie options as needed
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize, // Pass Sequelize instance to the store
  // })
}));

// Other middleware




// view engine setup
app.set('views', path.join(dirname(import.meta), 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// plugins
app.use(logger(process.env.NODE_ENV === "production" ? "common" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(dirname(import.meta), "../", 'public')));

// routers
app.get("/", (req, res) => {
  res.render("index", { title: 'Express' })
})
app.use('/users', usersRouter);

export default app;
