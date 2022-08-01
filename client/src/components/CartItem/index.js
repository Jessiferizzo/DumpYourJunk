import React from 'react';

const CartItem = ({ product }) => {
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
            value={product.Quantity}
          />
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

export default CartItem;