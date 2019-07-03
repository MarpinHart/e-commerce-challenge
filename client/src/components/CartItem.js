import React from 'react'
import { Button } from 'reactstrap'

const CartItem = ({ title, price, deleteItemFromCart, index }) => {
  return (
    <div className="CartItem">
      <Button color="danger" size="sm" onClick={e=>deleteItemFromCart(e,index)}>X</Button>
      <h6>{title}</h6>
      <h6>{price}</h6>
    </div>
  ) 
}

export default CartItem
