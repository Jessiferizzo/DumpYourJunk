// / import { QUERY_CHECKOUT } from '../../utils/queries';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';


// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// INCLUDE THIS IN THE JSX FUNCTIONAL COMPONENT OF THE CART
// 
//
// const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
//
//
//  <button onClick={submitCheckout}>
//   Checkout
//  </button>



// UNDERNEATH IN THE CART COMPONENTS calculateTotal() function, DECLARE A NEW FUNCTION 
// CALLED submitCheckout()
//
// Example below:
//
//  function submitCheckout() {
 //      const product_id = [];

 // state.cart.forEach((item) => {
  //   for (let i = 0; i < item.purchaseQuantity; i++) {
 //     productId.push(item._id);
  //  }
  // });
//  }