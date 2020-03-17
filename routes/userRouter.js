var express = require("express");
var userServ = require("../services/userService");

var router = express.Router();

// router.get('/users', userServ.getAllUsers); //getting all users

// router.get('/users/details', userServ.getAllDetails); //getting all details

router.post("/users", userServ.createUser); //creating user

// router.post('/users/adress',  userServ.createAdress); //creating adress

// router.post('/users/userorders',  userServ.userOrder);//   creating user orders

module.exports = router;
