
const BrandModel = require('../models/BrandModel');

const getBrands = async (req, res) => {
  try {
    const brands = await BrandModel.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getBrands,
  // Add more exported controller functions
};
