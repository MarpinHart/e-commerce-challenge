import React, { Component } from "react";
import api from "../api";
import ProductCard from "./ProductCard";
import ShoppingCart from './ShoppingCart'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      cartItems: [],
      email: "",
      user: {},
      completed: false,
      submitted: false,
    };
  }
  handleAddCart(e, product){
    e.preventDefault()
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, product]
    }))
    console.log(this.state.cartItems)
  }
  handleCompleteCart(event){
    event.preventDefault()
    const { email } = this.state
    api.postEmail({ email })
      .then(res => {
        this.setState({
          completed: true,
          user: res.data
        })
      })
  } 
  handleInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleCompleteOrder(event, products){
    event.preventDefault()
    const _user = this.state.user._id
    const _products = this.state.
    console.log(user)
    
  }
  isEmailCorrect() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }
  render() {
    return (
      <div className="ProductList">
         {this.state.cartItems.length > 0 && 
          <ShoppingCart 
            cart={this.state.cartItems}
            completed={this.state.completed}
            email={this.state.email}
            handleCompleteCart={e=>this.handleCompleteCart(e)}
            handleCompleteOrder={e=>this.handleCompleteOrder(e)}
            handleInputChange={e=>this.handleInputChange(e)}
            isEmailCorrect={this.isEmailCorrect()}
          />}
        {this.state.allItems.map(product => (
            <ProductCard
              id={product._id}
              title={product.title}
              description={product.description}
              image={product.imageUrl}
              price={product.price}
              handleAddCart={e=>this.handleAddCart(e, product)}
            />
        ))}
      </div>
    );
  }
  componentDidMount() {
    api.getProductsList().then(res => {
      this.setState({ 
        allItems: res 
      });
      console.log(this.state.allItems, "state");
    });
  }
}

export default ProductList;
