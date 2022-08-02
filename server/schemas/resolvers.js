const { Product, User, Cart, Checkout } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('products');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },

    products: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Product.find(params).sort({ createdAt: -1 });
    },

    product: async (parent, { _id }) => {
      return Product.findOne({ _id });
    },
    cart: async () => {
      return Cart.find().sort({ createdAt: -1 });
    },

    // get all users
    users: async () => {
      return User.find().select("-__v -password").populate("products");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("products");
    },
  },

  Mutation: {
    
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    
    addProduct: async (parent, args, context) => {
      if (context.user) {
        const product = await Product.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { products: product._id } },
          { new: true }
        );
    
        return product;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }, 
    
    deleteProduct: async (parent, args, context) => {
      if (context.user) {
        const product = await Product.deleteOne({ ...args, username: context.user.username });
    
        await User.findByIdAndDelete(
          { _id: context.user._id },
          { $push: { products: product._id } },
          { new: true }
        );
    
        return product;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
  createCart: async (parent, { cart_id }) => {

    return await Cart.create({ _id: { cart_id } });

  },
 
    emptyCart: async (parent, { cart_id }) => {

      return await Cart.deleteOne({ _id: { cart_id } });

    },

    removeProductFromCart: async (parent, { product_id }) => {

      return await Cart.findOneAndDelete({ product_id });

    },
    addProductToCart: async (parent, { product_id }) => {
      return await Cart.create({ product_id });
    },
    increaseCartItem: async (_, {input}, {prisma}) => {
      const {cart_id} = await prisma.product.findByIdAndUpdate({
        data: {
          quantity: {
            increment:1, 
          },
        },
        where: {
          cart_id: {
            id: input.id,
            cart_id: input.cart_id, 
          },
        },
        select: {
          cart_id: true
        },
      });
    
      return this.createCart(prisma, cart_id);
    
    },

      decreaseCartItem: async (_, {input}, {prisma}) => {
        const {cart_id} = await prisma.product.findByIdAndUpdate({
          data: {
            quantity: {
              decrement:1, 
            },
          },
          where: {
            cart_id: {
              id: input.id,
              cart_id: input.cart_id, 
            },
          },
          select: {
            cart_id: true
          },
        });
      
      return this.createCart(prisma, cart_id);

    }
      
};

module.exports = resolvers;
