import React, { useState } from "react";
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



function App() {
  const[searchValue,setSearchValue]= useState('')
  const[cartProducts,setCartProducts]= useState([])

const  onAddToCart =({id})=>{
  console.log({clicked:'kkk'})
  if (!cartProducts.includes(id)){
    setCartProducts([...cartProducts, id])
  }
}

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header searchValue={searchValue} setSearchValue={setSearchValue} cartProducts={cartProducts} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} onAddToCart={onAddToCart} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
              <Route path="/product/:id" element={<SingleProduct onAddToCart={onAddToCart} />} />

              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
