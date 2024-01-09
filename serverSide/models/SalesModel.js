const mongoose = require('mongoose');
//  sales schema
const salesSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  price: Number,
  date: Date,
});
// sales model
const Sales = mongoose.model('Sales', salesSchema);
// Export the model
module.exports = Sales;
