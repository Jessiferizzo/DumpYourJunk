import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Avatar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ searchValue, setSearchValue, cartProducts }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <AppBar position="Relative" >
      <Toolbar className=" justify-space-between-lg  ">
        <Link to="/">
          <Avatar sx={{ m: 2, bgcolor: "#fff" }}>
            <IconButton color="primary">
              <HomeIcon></HomeIcon>
            </IconButton>
          </Avatar>
        </Link>
        <Typography variant="h6" color="inherit">
          Sell your Junk
        </Typography>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input" placeholder="filter" />

        <nav className="text-center nav-links">
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
        <div className="cart">
          <span className="cart-no">{cartProducts.length}</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
