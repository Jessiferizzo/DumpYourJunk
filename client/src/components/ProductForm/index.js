import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";
import { QUERY_PRODUCTS } from '../../utils/queries';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

const ProductForm = () => {
  const [productState, setproductState] = useState({
    productname: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  // const [characterCount, setCharacterCount] = useState(0);

  // const [addProduct] = useMutation(ADD_PRODUCT);

  const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
    update(cache, { data: { addProduct } }) {
  
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, products: [...me.products, addProduct] } },
        });
      } catch (e) {
        console.warn("First product insertion by user!")
      }
  
      // update thought array's cache
      const { products } = cache.readQuery({ query: QUERY_PRODUCTS });
      cache.writeQuery({
        query: QUERY_PRODUCTS,
        data: { products: [addProduct, ...products] },
      });
    }
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    // if(name === "price"){
    //   value = parseInt(value)
    // }
    setproductState({
      ...productState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add thought to database
      await addProduct({ variables: { ...productState } });

      // clear form value

      // setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`m-0`}></p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder="Here's a new Product name"
          name="productname"
          value={productState.productname}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        />
        <input
          placeholder="Description"
          name="description"
          value={productState.description}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        />
        <input
          placeholder="Category"
          name="category"
          value={productState.category}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        />
        <input
          placeholder="image"
          name="image"
          value={productState.image}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        />
        <input
          placeholder="price"
          name="price"
          value={productState.price}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        />
        <br />
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
