
const ProfileModel = require('../models/ProfileModel');

const profileCreate = async (req, res) => {
  try {
    const carts = await ProfileModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const updateProfile = async (req, res) => {
  try {
    const carts = await ProfileModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const readProfile = async (req, res) => {
  try {
    const carts = await ProfileModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  profileCreate,updateProfile,readProfile
};
