import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({searchValue,setSearchValue, cartProducts}) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Sell Your Junk</h1>
        </Link>
        <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className="search-input" placeholder="filter"/>

        <nav className="text-center nav-links">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
              <div className="cart">
                <span className="cart-no">{cartProducts.length}</span>
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
