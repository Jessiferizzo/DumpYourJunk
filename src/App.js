import React from 'react';
import Album from './components/Gallery';
import LoginForm from './components/Login';
<<<<<<< HEAD
import Nav from './components/Nav'
import HomePage from './components/Homepage';
import SignUp from './components/Singup';

=======
import About from './components/About';
import Checkout from './components/Checkout/Checkout';
import PrimarySearchAppBar from './components/Nav';
>>>>>>> 654c03f82401dac556b239ebc60976adb2708cec


function App() {

  return (
    <div>
      <main>
<<<<<<< HEAD
        <Nav></Nav>
        <HomePage></HomePage>
=======
      <PrimarySearchAppBar></PrimarySearchAppBar>
        <About></About>
>>>>>>> 654c03f82401dac556b239ebc60976adb2708cec
        <LoginForm></LoginForm>
        <SignUp></SignUp>
      </main>
      <section>
        <Album></Album>
      </section>
      <section>
        <Checkout></Checkout>
      </section>
    </div>
  );
}

export default App;