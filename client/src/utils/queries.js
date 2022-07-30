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