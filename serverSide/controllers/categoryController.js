
const CategoryModel = require('../models/CategoryModel');

const categoryList= async (req, res) => {
  try {
    const categoryLists = await CategoryModel.find();
    res.json(categoryLists);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  categoryList,
};