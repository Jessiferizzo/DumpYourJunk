import React from "react";
import { Link } from "react-router-dom";

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
