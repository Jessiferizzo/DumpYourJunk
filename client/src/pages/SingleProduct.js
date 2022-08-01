import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../utils/queries";
import { Box, Button, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";


const SingleProduct = ({ onAddToCart }) => {
  const { id: productId } = useParams();

  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { id: productId },
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      sx={{
        bgcolor: 'background.paper',
        
        pt:8,
        pb:6
      }}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea >
          <Typography className="card-header">
            <Typography style={{ fontWeight: 700 }} className="text-light">
              {product.username}
            </Typography>{" "}
             product on {product.createdAt}
            <Typography sx={{pt:2}}>
              <p><span style={{ fontWeight: 400 }} className="text-light">Caterogy:</span> {product.category}</p>
            </Typography>
          </Typography>
          <Box           sx={{
            bgcolor: 'background.paper',
            p: 5
          }}>
            <Typography variant="h5" component="h2">{product.productname}</Typography>
            <CardMedia className="card-image" >
              <img src={product.image} alt='card' />
            </CardMedia>
            <Typography sx={{pt:2, pb:2}}>${product.price}</Typography>
            <p>{product.description}</p>
            
            
            <Button variant="contained" onClick={() => onAddToCart({ id: product._id })} size="large">ADD</Button>
          </Box>
        </CardActionArea>
      </Box>
    </Container>
  );
};

export default SingleProduct;
