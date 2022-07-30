import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Album from './components/Gallery';
import LoginForm from './components/Login';
import About from './components/About';
import Checkout from './components/Checkout/Checkout';
import PrimarySearchAppBar from './components/Nav';
import SignUp from './components/Singup';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});



function App() {

  return (
    <ApolloProvider client={client}>
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
    </div>
    </ApolloProvider>
  );
}

export default App;