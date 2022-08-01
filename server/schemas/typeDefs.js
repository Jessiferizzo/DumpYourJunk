// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Product {
    _id: ID
    productname: String
    description: String
    image: String
    price: Float
    category: String
    quantity: Int
  }
  type User {
    _id: ID
    username: String
    email: String
  }
  type Cart {
       _id: ID
       product: [Product]
  }
  type Auth {
    token: ID
    user: User
}
  type Query {
    products: [Product]
    users: [User]
    cart: [Cart]
    checkout(product:[ID]!): Checkout
  }
  type Mutation {
    addProductToCart(product_id: ID, cart_id: ID):Cart

    deleteProductToCart(product_id: ID, cart_id: ID):Cart
    
    emptyCart(product_id:ID):Cart

    increaseQuantity(product_id: ID):Cart

    decreaseQuantity(product_id: ID):Cart

    createCheckoutSession( cart_id: ID): CheckoutSession
      
  }
  type CheckoutSession {
    cart_id: Cart
  }


`;

// export the typeDefs
module.exports = typeDefs;
