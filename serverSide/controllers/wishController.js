const WishModel = require('../models/WishModel');

const wishList = async (req, res) => {
  try {
    const carts = await WishModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const saveWishList = async (req, res) => {
  try {
    const carts = await WishModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const removeWishList = async (req, res) => {
  try {
    const carts = await WishModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  wishList,saveWishList,removeWishList
};
