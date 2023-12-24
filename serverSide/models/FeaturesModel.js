const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const FeaturesModel = mongoose.model('Features', featuresSchema);

module.exports = FeaturesModel;
