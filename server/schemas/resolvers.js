const {Product, User} = require('../models')

const resolvers = {
  Query: {
    products: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Product.find(params).sort({ createdAt: -1 });
    },

    product: async (parent, { _id }) => {
      return Product.findOne({ _id });
    },

 // get all users
users: async () => {
  return User.find()
    .select('-__v -password')
    .populate('products')
},
// get a user by username
user: async (parent, { username }) => {
  return User.findOne({ username })
    .select('-__v -password')
    .populate('products')
},
  },
};

module.exports = resolvers;
