
const CartModel = require('../models/CartModel');

const getCarts = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  getCarts,
};
