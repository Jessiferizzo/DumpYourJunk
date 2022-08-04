import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import ProductList from "../components/ProductList";
import Auth from "../utils/auth";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Tab, Tabs } from "@mui/material";
import { alpha } from '@mui/material/styles';

const styles = theme => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('xl')]: {
    width: '100%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%'
  },
  backgroundColor: (theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
});

const Home = ({ searchValue, onAddToCart }) => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];
  const loggedIn = Auth.loggedIn();
  const [filteredProducts, setFilteredProducts] = useState([]);


  function electronicsClick() {

    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Electronics".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }

  function homeAndGarden() {
    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Home and Garden".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }

  function clothingShoesAndAccessories() {
    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Clothing, Shoes, Accessories".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }

  function toysAndGames() {
    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Toys, Games, Hobbies".toLowerCase())
      )
    })
    setFilteredProducts(newName)
  }

  function pets () {
    const newName = products.filter((product) => {
      return (
        product.category.toLowerCase().includes("Pets".toLowerCase())
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

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };



  return (
    <main sx={{ mt: 6 }}>
        <Box sx={{ width: '100%', bgcolor: 'primary.main' }}>
          <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  textColor="inherit"
                  scrollButtons
                  indicatorColor="secondary"
                  aria-label="full width tabs example"
                  sx={styles}
          >
          <Tab label="Electronics" onClick={electronicsClick}></Tab>
          <Tab label="homeAndGarden" onClick={homeAndGarden}></Tab>
          <Tab label="Clothing, Shoes, and Accessories" onClick={clothingShoesAndAccessories}></Tab>
          <Tab label="Toys, Games, Hobbies" onClick={toysAndGames}></Tab>
          <Tab label="Pets" onClick={pets}></Tab>
          </Tabs>
        </Box>
      
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
