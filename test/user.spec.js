let mock = require("mock-require");
var Mocha = require("mocha");
mock("../models/userModel", "../models/user_mockModel");
// var chai = require("chai");
// const expect = chai.expect;
// var should = chai.should();
// const chaiHttp = require("chai-http");
const chai = require("chai");
const chaiHttp = require("chai-http");
// const expect = require('chai').expect();
const expect = chai.expect;
const assert = chai.assert;
const should = require("chai").should();
const server = require("../index");
chai.use(chaiHttp);

//const userService = require("../services/userService");

describe("sample", function() {
  it("inner function", function(done) {
    "5".should.equal("5");
    done();
  });
});
describe("user Functionality", function() {
  //   it("#Get All users", function(done) {
  //     chai
  //       .request(server)
  //       .get("/userapi/users")
  //       .end(function(err, res) {
  //         // if (err) {
  //         //   console.log(err);
  //         // }
  //         console.log(JSON.stringify(res));
  //         // res.should.have.status(200);
  //         // res.should.have.status(200);

  //         // expect(res).to.have.status(200);
  //         done();
  //       });
  //   });
  // });
  it("#Add New user ", function(done) {
    let request = {
      firstName: "",
      lastName: "yalamala",
      age: 66
    };
    chai
      .request(server)
      .post("/userapi/users")
      .send(request)
      .end(function(err, res) {
        // if (err) {
        //   console.log(err);
        // }
        // console.log(JSON.stringify(res));
        // res.should.have.status(200);
        //expect(res).to.have.status(200);
        done();
      });
  });
});
