const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({

  product: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;