import React from "react";
import { Button } from "reactstrap";
import EmailForm from './EmailForm'

const ShoppingCart = ({ cart, email, completed, handleCompleteCart, handleCompleteOrder, handleInputChange, isEmailCorrect }) => {
  return (
    <div className="ShoppingCart">  
      {cart.map(shoppedItem => (
        <h1>{shoppedItem.title}</h1>
      ))}
      <EmailForm 
        email={email}
        handleInputChange={handleInputChange}
        handleCompleteCart={handleCompleteCart}
        isEmailCorrect={isEmailCorrect}
      />
      <Button onClick={handleCompleteOrder} className={completed ? 'active' : 'disabled'}> Complete Order </Button>
    </div>
  );
};

export default ShoppingCart;
