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
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Electronics" />
        <Tab value="two" label="Home and Garden" />
        <Tab value="three" label="Clothing, Shoes, Accessories" />
        <Tab value="one" label="Toys, Games, Hobbies" />
        <Tab value="two" label="Sports and Outdoors" />
        <Tab value="three" label="Health and Beauty" />
        <Tab value="three" label="Pets" />
        <Tab value="three" label="More" />
      </Tabs>
    </Box>
  );
}
