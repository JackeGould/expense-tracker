// here, we set up a Sequelize config
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: '',
    dialect: 'mysql',
    port: 3300,
  }
);

module.exports = sequelize;