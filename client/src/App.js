import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>

      <ThemeProvider theme={theme}>
        <Router>  
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
            <Route path="/product/:id" element={<SingleProduct />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
