import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { Button, Card, Modal, Stack, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  maxWidth: '100vh',
  maxheight: '100vh',
  radius: ''
};

const ProductForm = () => {
  const [productState, setproductState] = useState({
    productname: "",
    description: "",
    image: "",
    price: "",
  });
  // const [characterCount, setCharacterCount] = useState(0);

  const [addProduct] = useMutation(ADD_PRODUCT);

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <Container maxWidth="xl">
      <Button variant="outlined" onClick={handleOpen}>Upload item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Card>
          <Box>
            <form
              onSubmit={handleFormSubmit}
>
              <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Here's a new Product name"
                name="productname"
                value={productState.productname}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Description"
                name="description"
                value={productState.description}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                required
                fullWidth

                name="image"
                value={productState.image}
                onChange={handleChange}
                hidden accept="image/*" multiple type="file"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="price"
                name="price"
                value={productState.price}

                onChange={handleChange}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
              </Box>
            </form>
            </Box>
          </Card>
        </Box>
      </Modal>
    </Container>
  );
};

export default ProductForm;
