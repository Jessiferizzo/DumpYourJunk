import React from 'react';
import LoginForm from './components/Login';
import Nav from './components/Nav'
import HomePage from './components/Homepage';
import SignUp from './components/Singup';



function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <HomePage></HomePage>
        <LoginForm></LoginForm>
        <SignUp></SignUp>
      </main>
    </div>
  );
}

export default App;