import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';


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
        width: '70%',
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '40%',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(3),
        width: '100%',
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

export default function SearchBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
  
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Typography>
        
      </Box>
    );
  }
  