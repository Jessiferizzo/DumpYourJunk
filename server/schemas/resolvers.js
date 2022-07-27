const {Product, User} = require('../models')

const resolvers = {
  Query: {
    products: async () => {
      return Product.find().sort({ createdAt: -1 });
    },
    users: async () => {
        return User.find().sort({ createdAt: -1 });
      },
  },
};

module.exports = resolvers;
