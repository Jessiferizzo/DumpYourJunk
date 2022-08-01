import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <AppBar   position="relative" color="primary" sx={{ bottom:0, right:0}}>
      <Toolbar>
        <div className="container">&copy;2020 Your Fav project Group</div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
