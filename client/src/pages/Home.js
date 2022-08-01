import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import ProductList from "../components/ProductList";
import Auth from "../utils/auth";
import Cart from "../components/Cart";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
      <div className={`col-12 mb-3`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList products={products} title="Buy Some Beautiful Junks" />
          )}
        </div>
        <div className="container">
  <CategoryMenu category={category} title="Which Category Would You Like" />
  <ProductList />
  <Cart Cart={cart} title="Cart" />
</div>
      </div>
    </main>
  );
};

export default Home;
