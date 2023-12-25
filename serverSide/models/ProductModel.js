const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDes: String,
  price: {
    type: Number,
    required: true,
  },
  discount: Number,
  discountPrice: Number,
  image: String,
  star: Number,
  stock: Number,
  remark: String,
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  brandID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
