import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const styles = theme => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('xl')]: {
      width:'100%'
  },
  [theme.breakpoints.up('lg')]: {
    width:'100%'
  },
});

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Tabs
      centered
        value={value}
        onChange={handleChange}
        variant="scrollable"
        textColor="secondary"
        scrollButtons
        indicatorColor="secondary"
        aria-label="scrollable auto tabs example"
        sx={styles}
        
      >
        <Tab value="one" label="Electronics" />
        <Tab value="two" label="Home and Garden" />
        <Tab value="three" label="Clothing, Shoes, Accessories" />
        <Tab value="four" label="Toys, Games, Hobbies" />
        <Tab value="five" label="Sports and Outdoors" />
        <Tab value="six" label="Health and Beauty" />
        <Tab value="seven" label="Pets" />
      </Tabs>
    </Box>
  );
}
