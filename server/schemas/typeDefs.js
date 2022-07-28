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
  }
  type User {
    _id: ID
    username: String
    email: String
    products: [Product]
  }
  type Query {
    users: [User]
    user(username: String!): User
    products(username: String): [Product]
    product(_id: ID!): Product
  }
`;

// export the typeDefs
module.exports = typeDefs;
