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
  }
  type User {
    _id: ID
    username: String
    email: String
  }
  type Query {
    products: [Product]
    users: [User]
  }
`;

// export the typeDefs
module.exports = typeDefs;
