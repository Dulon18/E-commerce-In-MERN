const CartModel = require('../models/CartModel');

const getAllCarts = async () => {
  try {
    const carts = await CartModel.find();
    return carts;
  } catch (error) {
    throw new Error('Error fetching carts from the database');
  }
};

module.exports = {
  getAllCarts
};
