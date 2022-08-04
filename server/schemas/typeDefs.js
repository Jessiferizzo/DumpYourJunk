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
    price: Int
    category: String
  }
  type User {
    _id: ID
    username: String
    email: String
    products: [Product]
  }
  type Auth {
    token: ID!
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
    addProduct(productname: String!, description: String!, image: String, price: String, category: String): Product
  }
`;

// export the typeDefs
module.exports = typeDefs;
