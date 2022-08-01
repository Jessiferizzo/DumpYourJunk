const mongoose = require('mongoose');

const { Schema } = mongoose;

const checkoutSchema = new Schema({

  price: [{
    type: checkoutSchema.Types.ObjectId,
    ref: 'Product',
    required: true
  }]
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;