import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query products($username: String) {
    products(username: $username) {
      _id
      productname
      description
      image
      price
      createdAt
      username
      category
    }
  }
`;


export const QUERY_PRODUCT = gql`
  query product($id: ID!) {
    product(_id: $id) {
      _id
      productname
      description
      image
      price
      createdAt
      username
      category
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      products {
        _id
        productname
        description
        image
        price
        createdAt
        username
        category
      }
    }
  }
`;