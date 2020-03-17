var db = require("../config/db");
var userModel = require("../models/userModel");
var userOrdersModel = require("../models/userOrdersModel");
var userAdressModel = require("../models/userAdressModel");
const Sequelize = require("sequelize");

//userModel.User.hasMany(userOrdersModel.UserOrders,{sourceKey: 'userId'}); // Sorce to Target

//userOrdersModel.UserOrders.hasMany(userAdressModel.UserAdress,{sourceKey: 'userId',foreignKey: 'userId',});

// userModel.UserOrders.belongsTo(userModel.User,{sourceKey: 'userId', foreignKey : 'userId'}); // Target to Source

//==================================================================================================================================
var createUser = async function(req, res) {
  //   console.log("Hello");
  try {
    const result = await userModel.User.create({
      userId: req.body.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      IsDeleted: 0
    });

    if (result) {
      res.status(200).send({
        status: 200,
        message: "User Created Sucessfully"
      });
    } else {
      res.status(500).send({
        status: 500,
        message: "User Creation failed "
      });
    }
  } catch (error) {
    res.send(error);
  }
};

//====================================================================================================================================

// var createAdress = async (req, res) => {
//   try {
//     const result = await userAdressModel.UserAdress.create({
//       userId: req.body.userId,
//       city: req.body.city,
//       country: req.body.country,
//       IsDeleted: 0
//     });

//     if (result) {
//       res.status(200).send({
//         status: 200,
//         message: "UserAdress Created Sucessfully"
//       });
//     } else {
//       res.status(500).send({
//         status: 500,
//         message: "UserAdress Creation failed "
//       });
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

//================================================================================================================================

// var getAllUsers = function(req, res) {
//   userModel.User.findAll() /*{
//          attributes:['firstName','lastName','userorders.value'],
//         include: [{
//             model: userOrdersModel.UserOrders,
//              attributes: []
//         }],raw:true
//         // ,attributes:['firstName','lastName']
//     })*/
//     .then(function(users) {
//       res.status(200).send(users);
//     })
//     .catch(function(err) {
//       res.status(500).send({
//         status: 500,
//         message: err.message
//       });
//     });
// };

// //====================================================================================================================================

// var userOrder = async (req, res) => {
//   try {
//     const resul = await userOrdersModel.UserOrders.create({
//       userId: req.body.userId,
//       orderQuantity: req.body.orderQuantity,
//       value: req.body.value,
//       IsDeleted: 0
//     });

//     if (resul) {
//       res.status(200).send({
//         status: 200,
//         message: "UserOrder Created Sucessfully"
//       });
//     } else {
//       res.status(500).send({
//         status: 500,
//         message: "UserOrder Creation failed "
//       });
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

// //=====================================================================================================================================

// var getAllDetails = (req, res) => {
//   userModel.User.findAll({
//     // attributes:['firstName','lastName','userorders.value'],
//     include: [
//       {
//         model: userOrdersModel.UserOrders,
//         include: [
//           {
//             model: userAdressModel.UserAdress
//           }
//         ]
//         //attributes: []
//       }
//     ],
//     raw: false
//     // ,attributes:['firstName','lastName']
//   })
//     .then(users => {
//       res.status(200).send(users);
//     })
//     .catch(err => {
//       res.status(500).send({
//         status: 500,
//         message: err.message
//       });
//     });
// };

/* db.users.findAll({
      include: [
        {
          model: db.posts,
          include: [
            {
              model: db.comments
            }
          ]
        }
      ]
    })*/

module.exports = {
  createUser: createUser
  //   getAllUsers: getAllUsers
  //   userOrder: userOrder,
  //   getAllDetails: getAllDetails,
  //   createAdress: createAdress
};
