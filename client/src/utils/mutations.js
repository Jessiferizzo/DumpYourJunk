import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_PRODUCT = gql`
  mutation addProduct($productname: String!, $description: String!, $image: String, $price: String) {
    addProduct(productname: $productname, description: $description, image:$image, price:$price) {
      _id
      productname
      description
      image
      price
      createdAt
      username
    }
  }
`;