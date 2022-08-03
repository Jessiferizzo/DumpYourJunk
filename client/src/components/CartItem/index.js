import React from 'react';

var i = 0;
function increaseCartItem() {
  document.getElementById('inc').value = ++i;
}


const cartItem = ({ product }) => {
  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${product.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{product.name}, ${product.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={product.Quantity} />
          <span
            role="img"
            aria-label="trash"
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}


export default cartItem;