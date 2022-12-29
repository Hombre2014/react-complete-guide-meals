import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) =>  <li>{item.name}</li>)}</ul>;

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>23.98</span>
      </div>
      <div className={classes.actions}>
        <buttons className={classes['button-alt']}>Close</buttons>
        <buttons className={classes.button}>Order</buttons>
      </div>
    </div>
  )
}

export default Cart;
