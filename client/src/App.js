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





function App() {

  return (
    <div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Album />} />
            <Route path='/Login' element={<LoginForm />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/Search' element={<PrimarySearchAppBar />} />
            <Route path='/cart' element={<InteractiveList />} />
            <Route path="*" element={<Album />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;