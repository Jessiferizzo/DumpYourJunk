import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../utils/queries";

const SingleProduct = ({onAddToCart}) => {
  const { id: productId } = useParams();

  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { id: productId },
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {product.username}
          </span>{" "}
          product on {product.createdAt}
        </p>
        <div className="card-body">
          <p>{product.productname}</p>
          <div  className="card-image">
              <img src={product.image} alt='card'/>
            </div>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <button onClick={()=>onAddToCart({id:product._id})} className="card-button">ADD</button>
         </div>
      </div>
    </div>
  );
};

export default SingleProduct;
