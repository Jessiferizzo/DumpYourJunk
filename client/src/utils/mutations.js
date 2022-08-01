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
  mutation addProduct($productname: String!, $description: String!, $image: String!, $price: Float) {
    addProduct(productname: $productname, price: $price, image: $image, description: $description) {
      
      Product {
        _id
        productname
        description
        image
        price
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productname: String!, $description: String!, $image: String!, $price: Float) {
    deleteProduct(productname: $productname, price: $price, image: $image, description: $description) {
      
      Product {
        _id
        productname
        description
        image
        price
      }
    }
  }
`;

//  not sure if this is right below 

// const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION);
//
//
//    }}
//const DELETE_PRODUCT_MUTATION = gql'
// mutation deleteProduct($input: deleteProduct!) {
// deleteProduct(input: $input) {
//  _id
//  productname
//  image
//  price
//  category
//
// }
//  }
// ';











export const EMPTY_CART = gql`
  mutation emptyCart($product_id: ID!) {
    emptyCart(product_id: $product_id) {
      
      Cart {
        _id
      }
    }
  }
`;