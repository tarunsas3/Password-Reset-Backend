const User = require("../models/users");

const root = async (req, res) => {
  let data = await User.find({});
  res.json(data);
};

module.exports = root;
