const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema({
  productname: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  },
  category: {
    type: String,
  }
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: '',
  //   required: true
  // }
});

const Product = model('Product', productSchema);

module.exports = Product;