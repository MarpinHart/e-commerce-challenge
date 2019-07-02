import React from "react";
import { Button } from "reactstrap";
import EmailForm from './EmailForm'

const ShoppingCart = ({ cart, handleCompleteCart, completed, handleCompleteOrder }) => {
  return (
    <div>
      
      {cart.map(shoppedItem => (
        <h1>{shoppedItem.title}</h1>
      ))}
      <Button onClick={handleCompleteCart}> Confirm </Button>
      
      {completed && (
        <EmailForm 
          handleCoompleteOrder={handleCompleteOrder}
        />
      )}
    </div>
  );
};

export default ShoppingCart;
