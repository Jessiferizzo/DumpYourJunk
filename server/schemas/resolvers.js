const { Product, User, Cart } = require('../models')

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
