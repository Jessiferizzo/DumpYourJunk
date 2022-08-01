import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };

  return (
    <Grid
      container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleFormSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Your name"
              autoComplete='name'
              autoFocus
              name='username'
              type='username'
              id='username'
              value={formState.username}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              label="Email"
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="current-password"
              label='Password'
              placeholder='******'
              name='password'
              type='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type='submit'>
              Signing Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/Login">
                  Have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
          {error && <div>Sign up failed</div>}

        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Grid>
  );
};

export default Signup;
