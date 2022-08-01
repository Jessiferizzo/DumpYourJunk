import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, title, onAddToCart}) => {
  if (!products.length) {
    return <h3> There is no product to display </h3>;
  }

  return (
    <div>
      <div className={'card-list'}>
        {products &&
        products.map((product) => (
          <Box key={product._id} className="card mb-3">
            <Typography className="card-header">
              <Link
                to={`/profile/${product.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
                >
                {product.username}
                <br />
                
              </Link>{" "}
              Created on {product.createdAt}
            </Typography>

              <Link to={`/product/${product._id}`}>
              <Typography variant="h6" sx={{pl:2}}>{product.productname}</Typography>
              <div  className="card-image">
                <img src={product.image} alt='card'/>
              </div>
            <Container sx={{p:1}}>
              {/*  <p>{product.description}</p> */}
              <Typography>{product.category}</Typography>
              <Typography>${product.price}</Typography>

            </Container>
              </Link>
              <Box sx={{p:2}}>
              <Button  size="large"variant="outlined"  onClick={()=>onAddToCart({id:product._id})} className="card-button">Add to Cart</Button>
              </Box>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
