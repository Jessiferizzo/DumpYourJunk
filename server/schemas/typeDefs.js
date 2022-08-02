// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Product {
    _id: ID
    productname: String
    description: String
    createdAt: String
    username: String
    image: String
    price: Float
    category: String     
    quantity: Int = 1
  }
  type User {
    _id: ID
    username: String
    email: String
    products: [Product]
  }
  type Cart {
    _id: ID
    product: [Product]
}
  type Auth {
    token: ID!
    user: User
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
    me: User
    users: [User]
    user(username: String!): User
    products(username: String): [Product]
    product(_id: ID!): Product
  }
  type Mutation {
    
    login(email: String!, password: String!): Auth
    
    addUser(username: String!, email: String!, password: String!): Auth
    
    addProduct(productname: String!, description: String!, image: String!, price: Float): Product
    
    deleteProduct(productname: String!, description: String!, image: String!, price: Float): Product
    
    emptyCart(product_id:ID):Cart
    
    createCheckoutSession( cart_id: ID): CheckoutSession
    
    addProductToCart(product_id: ID, cart_id: ID):Cart
    
    removeProductFromCart(product_id: ID, cart_id: ID):Cart

    increaseCartItem(cart_id:ID, product_id:ID): Cart

    decreaseCartItem(cart_id:ID, product_id:ID): Cart
    
    emptyCart(product_id:ID):Cart
  }
      
  }
  type CheckoutSession {
    cart_id: Cart
  }


`;

// export the typeDefs
module.exports = typeDefs;
