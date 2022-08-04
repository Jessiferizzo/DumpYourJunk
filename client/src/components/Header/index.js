import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Avatar, Box, Container, Grid, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2,),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '70%',
  [theme.breakpoints.down('lg')]: {
    marginLeft: theme.spacing(3),
    width: '40%',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing(3),
    width: '40%',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(3),
    width: '70%',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const Header = ({ searchValue, setSearchValue, cartProducts, electronicsClick }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Box >
      <AppBar position="relative">
        <Container maxWidth="xl">
          {/* className=" justify-space-between-lg  "*/}
          <Toolbar className=" justify-space-between-lg  ">
            <Link to="/">
              <Avatar sx={{ m: 2, bgcolor: "#fff" }}>
                <IconButton color="primary">
                  <HomeIcon></HomeIcon>
                </IconButton>
              </Avatar>
            </Link>
            <Typography variant="h6" color="inherit" sx={{ pl: 2, pr: 2 }}>
              Sell your Junk
            </Typography>
            {Auth.loggedIn() && (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="search-input"
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </Typography>

              </>
            )}
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              {Auth.loggedIn() ? (
                <Grid container spacing={1} justifyContent="center" rowSpacing={1}>
                  <Grid item>
                    <Link to="/profile">
                      <IconButton size="large">
                        <AccountBoxRoundedIcon></AccountBoxRoundedIcon>
                      </IconButton>
                    </Link>
                  </Grid>
                  <Grid item>
                    <a href="/" onClick={logout}>
                      <IconButton size="large">
                        <ExitToAppRoundedIcon></ExitToAppRoundedIcon>
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item>
                    <Box className="cart">
                      <span className="cart-no">{cartProducts.length}</span>
                      <Link to="/cart">
                        <ShoppingCartIcon ></ShoppingCartIcon>
                      </Link>

                    </Box>
                  </Grid>
                </Grid>
              ) : (
                <Box >
                  <IconButton sx={{ fontSize: "15px" }} >
                    <Link to="/login" >Login</Link></IconButton>
                  <IconButton sx={{ fontSize: "15px" }}>
                    <Link to="/signup" >Signup</Link>
                  </IconButton>
                </Box>
              )}
            </Box>

          </Toolbar>
        </Container>

      </AppBar>
    </Box>
  );
};

export default Header;
