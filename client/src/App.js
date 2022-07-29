import React from 'react';
import Album from './components/Gallery';
import LoginForm from './components/Login';
import About from './components/About';
import Checkout from './components/Checkout/Checkout';
import PrimarySearchAppBar from './components/Nav';
import SignUp from './components/Singup';
import CartForm from './components/CartForm';





function App() {

  return (
    <div>
      <main>
      <PrimarySearchAppBar></PrimarySearchAppBar>
        <About></About>
        <LoginForm></LoginForm>
      </main>
      <section>
        <SignUp></SignUp>
      </section>
      <section>
        <Album></Album>
      </section>
      <section>
        <Checkout></Checkout>
      </section>
      <section>
        <CartForm></CartForm>
      </section>
    </div>
  );
}

export default App;