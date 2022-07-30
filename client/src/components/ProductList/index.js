import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3> There is no product to display </h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
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

            <div className="card-body">
            <Link to={`/product/${product._id}`}>
              <p>{product.productname}</p>
              {/* <p>{product.image}</p> */}
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
