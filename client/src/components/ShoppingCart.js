import React from "react";
import { Button } from "reactstrap";
import EmailForm from './EmailForm'
import CartItem from './CartItem'

const ShoppingCart = ({ cart, email, completed, handleCompleteCart, handleCompleteOrder, handleInputChange, isEmailCorrect, deleteItemFromCart}) => {
  let newPrice = 0
  return (
    <div className="ShoppingCart">  
      <h1>Shopping Cart</h1>
      <hr/>
      <div className="shopping-list">
      {cart.length === 0 && <h6>Please insert products</h6>}
      {cart.map((shoppedItem, index) => (
       <CartItem 
        index={index}
        title={shoppedItem.title}
        price={shoppedItem.price}
        deleteItemFromCart={deleteItemFromCart}
       />
      ))}
      </div>
      <hr/>
      {cart.map(item => {
        newPrice += parseFloat(item.price.substring(0, item.price.length-1))
      })}
     <h4>Total: {newPrice.toFixed(2).toString()} €</h4>
      <hr/>
      <EmailForm 
        email={email}
        handleInputChange={handleInputChange}
        handleCompleteCart={handleCompleteCart}
        isEmailCorrect={isEmailCorrect}
      />
      <Button onClick={handleCompleteOrder} className={completed ? 'active complete-button' : 'disabled complete-button'}> Complete Order </Button>
    </div>
  );
};

export default ShoppingCart;
