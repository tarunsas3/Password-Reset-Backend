const User = require("../models/users");
const { comparePassword } = require("../utils/utils");

const login = async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, result) => {
    if (result) {
      let match = await comparePassword(req.body.password, result.password);
      if (match) {
        res.json({
          loggedIn: true,
          message: "Login successfull",
        });
      } else {
        res.json({
          loggedIn: false,
          message: "Password does not match",
        });
      }
    } else {
      res.json({
        loggedIn: false,
        message: "Email id not registered",
      });
    }
  });
};

module.exports = login;
