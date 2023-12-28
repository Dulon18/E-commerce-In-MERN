
const ProductSliderModel = require('../models/ProductSliderModel');

const productSliderList = async (req, res) => {
  try {
    const productSliderList = await ProductSliderModel.find();
    res.json(productSliderList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  productSliderList
};
