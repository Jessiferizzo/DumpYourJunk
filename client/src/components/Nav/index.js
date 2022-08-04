import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { Container } from '@mui/material';


const styles = theme => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('xl')]: {
    width: '100%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '100%'
  },
  backgroundColor: (theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
});

export default function Navigation({electronicsClick}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <Container maxWidth="xl">
      <div onClick = {electronicsClick} style={{cursor: 'pointer'}}>
        <p>Electronics</p>
        </div>
    <Box sx={{ width: '100%' }} >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        textColor=""
        scrollButtons
        indicatorColor="secondary"
        aria-label="scrollable auto tabs example"
        sx={styles}

      >
        
        <Tab value="1" label="Electronics"  /> 
        

        <Tab value="2" label="Home and Garden" />
        <Tab value="3" label="Clothing, Shoes, Accessories" />
        <Tab value="4" label="Toys, Games, Hobbies" />
        <Tab value="5" label="Sports and Outdoors" />
        <Tab value="6" label="Health and Beauty" />
        <Tab value="7" label="Pets" />
      </Tabs>
    </Box>
    </Container>
  );
}
