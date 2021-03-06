const bcrypt = require("bcrypt");

const hashPassword = async (plainPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(plainPassword, salt);
  return hash;
};

const comparePassword = async (plainPassword, hashPassword) => {
  const match = await bcrypt.compare(plainPassword, hashPassword);
  return match;
};

const generateRandomString = (length) => {
  let result = [];
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
};

module.exports = { hashPassword, comparePassword, generateRandomString };
