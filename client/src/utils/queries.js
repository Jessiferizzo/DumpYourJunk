import { gql } from '@apollo/client';
import { Cart } from '../../../server/models';

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

export const QUERY_ME = gql`
  {
    me {
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

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;


export const QUERY_CART = gql`
  query cart ($_id: ID!) {
    cart(_id: $ID) {
      cart_id
    }
  }
`;
