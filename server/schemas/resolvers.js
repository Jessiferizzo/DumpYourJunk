const { Product, User, Cart } = require('../models')

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    products: async () => {
      return Product.find().sort({ createdAt: -1 });
    },
    users: async () => {
      return User.find().sort({ createdAt: -1 });
    },
    cart: async () => {
      return Cart.find().sort({ createdAt: -1 });
    },
    checkout: async (parent, args, context) => {

      const order = new Cart({ products: args.products });

      const { products } = await order.populate('products');

      const line_items = [];

      for (let i = 0; i < products.length; i++) {
        // generate product id
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description
        });

        // generate price id using the product id
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

    }
  },
  Mutation: {
    deleteProductToCart: async (parent, { product_id }) => {

      return await Cart.findOneAndDelete({ product_id });

    },
    addProductToCart: async (parent, { product_id }) => {
      return await Cart.create({ product_id });
    },
    emptyCart: async (parent, { cart_id }) => {

      return await Cart.deleteOne({ _id: { cart_id } });

    },
  }
};

module.exports = resolvers;
