const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const User = sequelize.define('users', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    IsDeleted: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    timestamps: true,
    freezeTableName: true,
    tableName: "users"
});






module.exports = {
    User: User
}