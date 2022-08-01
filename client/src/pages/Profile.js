import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { Box, Container } from "@mui/system";
import Modal from '@mui/material/Modal';
import { Button, Card, Stack, TextField } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Profile = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

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


  return (
    <Container maxWidth="xl">
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {userParam ? `${user.username}'s` : 'your'} profile.
          </h2>
        </div>
        <Button variant="outlined" onClick={handleOpen}>Upload item</Button>
        <div className="justify-space-between mb-3">
          <div className="col-12 mb-3 col-lg-8">
            <ProductList
              products={user.products}
              title={`All Products posted by ${user.username}`}
            />
          </div>
        </div>
      </div>
      <Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div >
              <Box component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, },
                }}>
                <Stack direction="row" alignitems="center" spacing={2} sx={{ pb: 2 }}>
                  <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <PhotoCamera aria-label="upload picture" />
                </Stack>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Name of product"
                  autoFocus
                  name="product"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Category of product"
                  autoFocus
                  name="Category"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Price $"
                  autoFocus
                  name="Price"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  required
                  label="Description"
                  multiline
                  maxRows={6}
                  fullWidth
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  submit
                </Button>
              </Box>
            </div>
          </Box>
        </Modal>
      </Card >
    </Container >
  );
};

export default Profile;
