const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Income extends Model {}

Income.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
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
        modelName: 'income',
    }
);

module.exports = Income;
