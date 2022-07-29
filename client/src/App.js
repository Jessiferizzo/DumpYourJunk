import React from 'react';
import Album from './components/Gallery';
import LoginForm from './components/Login';
import About from './components/About';
import Checkout from './components/Checkout/Checkout';
import PrimarySearchAppBar from './components/Nav';
import SignUp from './components/Singup';
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
            <Route path='/' element={<Album/>}/>
          </Routes>
          <Routes>
            <Route path='/LoginForm' element={<LoginForm/>} />
          </Routes>
          <Routes>
            <Route path='/SignUp' element={<SignUp/>} />
          </Routes>
          <Routes>
            <Route path='/Checkout' element={<Checkout/>} />
          </Routes>
          <Routes>
            <Route path='/Search' element={<PrimarySearchAppBar/>} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;