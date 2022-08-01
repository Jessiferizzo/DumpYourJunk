import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Avatar, IconButton  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <AppBar  position="Relative" >
      <Toolbar className=" justify-space-between-lg  ">
        <Link to="/">
          <Avatar sx={{ m: 2, bgcolor:"#fff" }}>
          <IconButton color="primary"> 
            <HomeIcon></HomeIcon>
          </IconButton>
          </Avatar>
        </Link>
        <Typography  variant="h6" color="inherit">
          Sell your Junk
        </Typography>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
