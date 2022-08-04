import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const categories = [
  {
    value: 'USD',
    label: 'Electronics',
  },
  {
    value: 'EUR',
    label: 'Home and Garden',
  },
  {
    value: 'BTC',
    label: 'Clothing,Shoes,Accessories',
  },
  {
    value: 'JPY',
    label: 'Toys, Games, Hobbies',
  },
  {
    value: 'JPY',
    label: 'Sports and Outdoors',
  }
];

export default function SelectTextFields() {
  const [category, setCategory] = React.useState('Category');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      
      sx={{
        '& .MuiTextField-root': {  width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          margin="normal"
          required
          fullWidth
          id="outlined-select-category"
          select
          label="Category"
          value={category}
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  )
}