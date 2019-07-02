import React from "react";
import { Button } from "reactstrap";
import EmailForm from './EmailForm'

const ShoppingCart = ({ cart, email, completed, handleCompleteCart, handleCompleteOrder, handleInputChange }) => {
  return (
    <div>  
      {cart.map(shoppedItem => (
        <h1>{shoppedItem.title}</h1>
      ))}
      <Button onClick={handleCompleteCart}> Confirm </Button>
      {completed && (
        <EmailForm 
          email={email}
          handleCompleteOrder={handleCompleteOrder}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default ShoppingCart;
