import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import ProductList from "../components/ProductList";
import Auth from "../utils/auth";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProductForm from "../components/ProductForm";

const Home = ({ searchValue, onAddToCart}) => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];
  const loggedIn = Auth.loggedIn();
  const [filteredProducts, setFilteredProducts] = useState([]);


  function electronicsClick () {

    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Electronics".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }

  function homeAndGarden () {
    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Home and Garden".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }
  
  function clothingShoesAndAccessories () {
    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Clothing, Shoes, Accessories".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }
  
  function toysAndGames () {
    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Toys, Games, Hobbies".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }


  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return (
        product.username.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setFilteredProducts(filteredProducts);
  }, [searchValue, products]);

 

  return (
    <main sx={{ mt: 6 }}>
      <button onClick={electronicsClick}>Test Electronics</button>
      <button onClick={homeAndGarden}>Home and Garden</button>
      <button onClick={clothingShoesAndAccessories}>Clothing, Shoes, and Accessories</button>
      <button onClick={toysAndGames}>Toys, Games, Hobbies</button>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            mt={6}
          >
            Buy Some Beautiful Junk
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Like a garage sale but online!
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <div className="flex-row justify-space-between">
          <div className={`col-12 mb-3`}>
            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              <ProductList
                products={filteredProducts}
                onAddToCart={onAddToCart}
              />
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
