import React from "react";

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
              {product.username}
              <br />
              Created on {product.createdAt}
            </p>
            <div className="card-body">
              <p>{product.productname}</p>
              {/* <p>{product.image}</p> */}
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
