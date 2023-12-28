
const UserModel = require('../models/UserModel');

const userOtp = async (req, res) => {
  try {
    const carts = await UserModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const verifyLogin = async (req, res) => {
  try {
    const carts = await UserModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const logout = async (req, res) => {
  try {
    const carts = await UserModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  userOtp,verifyLogin,logout
};
