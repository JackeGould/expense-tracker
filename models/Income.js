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
                // "04/2024"
                // "Apr-24"
                // const date = input.split("/")
                // if(date[1] )
            // }
            // defaultValue: DataTypes.

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
