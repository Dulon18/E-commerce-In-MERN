
const BrandModel = require('../models/BrandModel');

const getAllBrands = async () => {
  try {
    const brands = await BrandModel.find();
    return brands;
  } catch (error) {
    throw new Error('Error fetching brands from the database');
  }
};


module.exports = {getAllBrands};
