const sequelize = require('../config/connections');
const db = require('../models');

const sync = async () => {
  await sequelize.sync({ force: true });
}

sync();