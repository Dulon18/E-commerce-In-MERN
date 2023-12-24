const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  payable: {
    type: Number,
    required: true,
  },
  cus_details: {
    type: String,
    required: true,
  },
  ship_details: {
    type: String,
    required: true,
  },
  tran_id: {
    type: String,
    required: true,
  },
  val_id: {
    type: String,
    required: true,
  },
  payment_status: {
    type: String,
    required: true,
  },
  delivery_status: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  vat: {
    type: Number,
    required: true,
  },
});

const InvoiceModel = mongoose.model('Invoice', invoiceSchema);

module.exports = InvoiceModel;
