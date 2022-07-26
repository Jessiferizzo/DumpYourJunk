import React from 'react';
import LoginForm from './components/Login';
import Nav from './components/Nav'
import HomePage from './components/Homepage';



function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <LoginForm></LoginForm>
        <HomePage></HomePage>
      </main>
    </div>
  );
}

export default App;