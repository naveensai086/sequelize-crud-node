const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const UserAdress = sequelize.define('userAdress', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    IsDeleted: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    timestamps: true,
    freezeTableName: true,
    tableName: "userAdress",
});


module.exports = {
    UserAdress:UserAdress
}