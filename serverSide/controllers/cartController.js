
const CartModel = require('../models/CartModel');

const cartsList = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const saveCart = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const removeCart = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  cartsList,saveCart,removeCart
};
