const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const UserOrders = sequelize.define('userorders', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    orderQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    value: {
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
    tableName: "userorders",
});

module.exports = {
    UserOrders:UserOrders ,
}