import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import About from '../About/index';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Nav from '../Nav'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


export default function InteractiveList() {
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

  return (
    <Box>
      <AppBar position="Fixed">
        <Toolbar>
          <Link to="/Gallery">
          <Avatar sx={{ m: 2, bgcolor:"#fff" }}>
              <IconButton color="primary">
              <HomeIcon ></HomeIcon>
              </IconButton>
            </Avatar>
          </Link>
          {/* Nav is the login/logout toggle */}
          <Nav></Nav>
          {/* Badge is currently set to a specific number
        need to link it to our cart page */}

        </Toolbar>
        <About></About>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Cart
          </Typography>

          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Avatar with text and icon
            </Typography>

            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="T- Shirt"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>

          </Grid>
        </Paper>
      </Container>
    </Box>

  )
}