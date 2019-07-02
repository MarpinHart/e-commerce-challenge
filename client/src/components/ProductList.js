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
    this.setState({
      completed: true,
    })
  } 
  handleCompleteOrder(event, products){
    event.preventDefault()
  }
  render() {
    return (
      <div className="ProductList">
         {this.state.cartItems.length > 0 && 
          <ShoppingCart 
            cart={this.state.cartItems}
            completed={this.state.completed}
            handleCompleteCart={e=>this.handleCompleteCart(e)}
            handleCompleteOrder={e=>this.handleCompleteOrder(e)}
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
