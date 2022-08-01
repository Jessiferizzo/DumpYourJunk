import React from "react";
import { Link } from "react-router-dom";
import { ADD_PRODUCT } from "../../utils/actions";
import { DELETE_PRODUCT } from "../../utils/actions";
 import { useStoreContext } from '../../utils/GlobalState';
 import { ADD_PRODUCT, UPDATE_CART_QUANTITY } from '../../utils/actions';

const [state, dispatch] = useStoreContext();


const { cart } = state;

const addProduct = () => {
  // find the cart item with the matching id
  const itemInCart = cart.find((cartItem) => cartItem._id === _id);

  // if there was a match, call UPDATE with a new purchase quantity
  if (itemInCart) {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: _id,
      purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    });
  } else {
    dispatch({
      type: ADD_PRODUCT,
      product: { ...product, purchaseQuantity: 1 }
    });
  }
};

const addProduct = () => {
  dispatch({
    type: ADD_PRODUCT,
    product: { ...product, purchaseQuantity: 1 }
  });
};

const deleteProduct = () => {
  dispatch({
    type: DELETE_PRODUCT,
    product: { ...product, purchaseQuantity: 1 }
  });
};











const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3> There is no product to display </h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <div className={'card-list'}>
        {products &&
        products.map((product) => (
          <div key={product._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${product.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
                >
                {product.username}
                <br />
                
              </Link>{" "}
              Created on {product.createdAt}
            </p>

              <Link to={`/product/${product._id}`}>
              <img src={product.productname} alt='card' className="card-image"/>
            <div className="card-body">
              {/*  <p>{product.description}</p> */}
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
              </Link>
              <button onClick={addProduct}>Add to cart</button>
              <button onClick={deleteProduct}>Remove from cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};




export default ProductList;
