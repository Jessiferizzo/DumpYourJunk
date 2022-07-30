import React from 'react';
import Album from './components/Gallery';
import LoginForm from './components/Login';

import Checkout from './components/Checkout/Checkout';
import PrimarySearchAppBar from './components/Nav';
import SignUp from './components/Singup';
import InteractiveList from './components/CartForm'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '##1976d2',
      main: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9c27b0',
      main: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#000',
    },
  }
  
});



function App() {

  return (
    <ThemeProvider theme={theme}>
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Album />} />
            <Route path='/Login' element={<LoginForm />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/Search' element={<PrimarySearchAppBar />} />
            <Route path='/Cart' element={<InteractiveList />} />
            <Route path="*" element={<Album />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;