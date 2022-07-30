import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import ProductList from "../components/ProductList";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">{loading ? (<div>Loading</div>):(<ProductList products={products} title="Buy Some Beautiful Junks" />)}</div>
      </div>
    </main>
  );
};

export default Home;
