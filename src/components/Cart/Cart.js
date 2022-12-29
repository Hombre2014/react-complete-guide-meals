import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) =>  <li>{item.name}</li>)}</ul>;

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>23.98</span>
      </div>
      <div className={classes.actions}>
        <buttons className={classes['button--alt']}>Close</buttons>
        <buttons className={classes.button}>Order</buttons>
      </div>
    </Modal>
  )
}

export default Cart;
