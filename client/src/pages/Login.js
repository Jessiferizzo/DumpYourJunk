import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import Box from '@mui/material/Box';
import { Avatar, Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
  
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>
          <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleFormSubmit}>
              <TextField
                margin='normal'
                required
                fullWidth
                className='form-input'
                label="Email Address"
                autoComplete="email"
                autoFocus
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
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <Button 
              sx={{ mt: 3, mb: 2 }}
              variant="contained"
              fullWidth
              className='btn d-block w-100' 
              type='submit'>
                Sign in
              </Button>
              <Grid container>
                <Grid item>
              <Link to="/signup">
              Don't have an account? Sign Up
              </Link>
              </Grid>
              </Grid>
            </Box>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
