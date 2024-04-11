const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Expense extends Model {}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        month_year: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: function(input) {
                // should follow this format
                // month-year
                // "04-2024"
            // }
            // defaultValue: DataTypes.

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            defaultValue: Date.now
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'expense',
    }
);

module.exports = Expense;
