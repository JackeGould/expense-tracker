// Associations

const User = require('./User');
const Expense = require('./Expense');
const Income = require('./Income');


// User hasMany Expense
User.hasMany(Expense, {
  foreignKey: 'user_id',
});

// Expense belongsTo User
Expense.belongsTo(User, {
  foreignKey: 'user_id',
});

// Income belongs to User
Income.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Expense, Income };