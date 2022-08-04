import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { QUERY_PRODUCTS } from '../../utils/queries';
import { QUERY_ME } from '../../utils/queries';
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
import UploadAndDisplayImage from "../../components/Upload"

const categories = [
  {
    value: 'USD',
    label: 'Electronics',
  },
  {
    value: 'EUR',
    label: 'Home and Garden',
  },
  {
    value: 'BTC',
    label: 'Clothing,Shoes,Accessories',
  },
  {
    value: 'JPY',
    label: 'Toys, Games, Hobbies',
  },
  {
    value: 'JPY',
    label: 'Sports and Outdoors',
  }
];

const ProductForm = () => {
  const [productState, setproductState] = useState({
    productname: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  // const [characterCount, setCharacterCount] = useState(0);

  // const [addProduct] = useMutation(ADD_PRODUCT);

  const [addProduct,] = useMutation(ADD_PRODUCT, {
    update(cache, { data: { addProduct } }) {

      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, products: [...me.products, addProduct] } },
        });
      } catch (e) {
        console.warn("First product insertion by user!")
      }

      // update thought array's cache
      const { products } = cache.readQuery({ query: QUERY_PRODUCTS });
      cache.writeQuery({
        query: QUERY_PRODUCTS,
        data: { products: [addProduct, ...products] },
      });
    }
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    // if(name === "price"){
    //   value = parseInt(value)
    // }
    setproductState({
      ...productState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add thought to database
      await addProduct({ variables: { ...productState } });

      // clear form value

      // setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div>
      <Typography variant='h5' sx={{ mb: '3' }}>Upload a product</Typography>
      <Box sx={{ width: '50%' }}>
        <form
          className=" justify-center justify-space-between-md align-stretch"
          onSubmit={handleFormSubmit}
        >
          <TextField
            margin="normal"
            required
            placeholder="Here's a new Product name"
            name="productname"
            value={productState.productname}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            label="description"
            name="description"
            value={productState.description}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          />
          <TextField
            placeholder="category"
            name="category"
            value={productState.category}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          />
          <Box

            sx={{
              '& .MuiTextField-root': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                margin="normal"
                fullWidth
                id="outlined-select-category"
                select
                value={productState.category}
                onChange={handleChange}
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
          <TextField
            placeholder="image"
            name="image"
            value={productState.image}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
            
          ></TextField><UploadAndDisplayImage />
          
          <TextField
            margin="normal"
            required
            placeholder="price"
            name="price"
            value={productState.price}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          />
          <Button variant="contained" className="btn col-12 col-md-3" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default ProductForm;
