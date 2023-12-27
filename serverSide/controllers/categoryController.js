
const CategoryModel = require('../models/CategoryModel');

const getCategories= async (req, res) => {
  try {
    const carts = await CategoryModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  getCarts,
};