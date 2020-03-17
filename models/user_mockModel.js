let SequelizeMock = require("sequelize-mock");
let mock_model = new SequelizeMock();
const User = mock_model.define(
  "users",
  {
    userId: 101,
    firstName: "madhu",
    lastName: "korada",
    age: 26,
    IsDeleted: 0
  },
  {
    timestamps: true,
    freezeTableName: true,
    tableName: "users"
  }
);

module.exports = {
  User: User
};
