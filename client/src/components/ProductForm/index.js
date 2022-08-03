import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../utils/mutations";

const ProductForm = () => {
  const [productState, setproductState] = useState({
    productname: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  // const [characterCount, setCharacterCount] = useState(0);

  const [addProduct] = useMutation(ADD_PRODUCT);

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
