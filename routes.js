const root = require("./routes/root");
const login = require("./routes/login");
const signup = require("./routes/signup");
const passwordReset = require("./routes/passwordReset");
const verifyResetURL = require("./routes/verifyResetURL");
const resetPassword = require("./routes/resetPassword");

module.exports = {
  root,
  login,
  signup,
  passwordReset,
  verifyResetURL,
  resetPassword,
};
