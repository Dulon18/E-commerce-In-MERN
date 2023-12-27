// productController.js
const ProductModel = require('../models/ProductModel');

const getProductListByBrand = async (req, res) => {
  const { BrandID } = req.params;

  try {
    const products = await ProductModel.find({ brandID: BrandID });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getProductListByBrand,
};
