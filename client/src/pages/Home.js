import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import ProductList from "../components/ProductList";
import Auth from "../utils/auth";
import Nav from "../components/Nav";

const Home = ({searchValue,onAddToCart})  => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];
  const loggedIn = Auth.loggedIn();
  const[filteredProducts,setFilteredProducts]= useState([])

  useEffect(()=>{
    const filteredProducts = products.filter(product=>{
      return product.username.toLowerCase().includes(searchValue.toLowerCase()) || product.category.toLowerCase().includes(searchValue.toLowerCase())
    }) 
    setFilteredProducts(filteredProducts)

  },[searchValue, products])

  return (
    <main>
      <Nav></Nav>
      <div className="flex-row justify-space-between">
      <div className={`col-12 mb-3`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList  products={filteredProducts} title="Buy Some Beautiful Junks" onAddToCart={onAddToCart} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
