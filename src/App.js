import React from 'react';
import About from './components/About/homepage';
import LoginForm from './components/Login';
import HomepageLayout from './components/Homepage';


function App() {

  return (
    <div>
      <main>
        <About></About>
        <LoginForm></LoginForm>
        <HomepageLayout></HomepageLayout>
      </main>
    </div>
  );
}

export default App;