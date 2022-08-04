import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const ProductList = ({ products, onAddToCart }) => {
  if (!products.length) {
    return <h3> There is no product to display </h3>;
  }

  return (
    <div>
      <div className={'card-list'}>
        {products &&
          products.map((product) => (
            <Box key={product._id} sx={{bgcolor: 'background.paper', p: 1 }} className="card mb-2">
              <Typography variant="body1" sx={{ p: 2 }} className="card-header">
                <Link
                  to={`/profile/${product.username}`}
                  style={{ }}
                  className="text-light"
                >
                  {product.username}
                  <br />

                </Link>{" "}
                Posted on {product.createdAt}
              </Typography>

              <Link to={`/product/${product._id}`}>
                <Typography variant="h6" sx={{ p: 2 }}>{product.productname}</Typography>
                <div className="card-image">
                  <img src={product.image} alt='card' />
                </div>
                <Container sx={{ p: 2 }}>
                  {/*  <p>{product.description}</p> */}
                  <Typography variant="body1">{product.category}</Typography>
                  <Typography variant="body1">${product.price}</Typography>

                </Container>
              </Link>
              <Box sx={{ p: 2 }}>
                {Auth.loggedIn() && (
                  <>
                    <Button
                      size="large"
                      variant="outlined"
                      onClick={() => onAddToCart({ id: product._id })}
                    >Add to Cart
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
