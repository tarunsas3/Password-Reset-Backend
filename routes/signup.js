const User = require("../models/users");
const { hashPassword } = require("../utils/utils");

const signup = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  const checkUserExists = await User.findOne({ email: req.body.email });
  if (!checkUserExists) {
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      randomString: "",
    });
    await user.save();
    res.json({ signup: true, message: "User has been created successfully" });
  } else {
    res.json({ signup: false, message: "User already exists" });
  }
};

module.exports = signup;
