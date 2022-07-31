const mongoose = require('mongoose');

const { Schema } = mongoose;

const checkoutSchema = new Schema({

  price: [{
    type: checkoutSchema.Types.ObjectId,
    ref: 'Product',
    required: true
  }]
});

const CheckoutSession = mongoose.model('Checkout', checkoutSchema);

module.exports = CheckoutSession;