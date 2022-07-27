import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        textColor="secondary"
        scrollButtons="auto"
        indicatorColor="secondary"
        aria-label="scrollable auto tabs example"
      >
        <Tab value="one" label="Electronics" />
        <Tab value="two" label="Home and Garden" />
        <Tab value="three" label="Clothing, Shoes, Accessories" />
        <Tab value="four" label="Toys, Games, Hobbies" />
        <Tab value="five" label="Sports and Outdoors" />
        <Tab value="six" label="Health and Beauty" />
        <Tab value="seven" label="Pets" />
        <Tab value="eight" label="More" />
      </Tabs>
    </Box>
  );
}
