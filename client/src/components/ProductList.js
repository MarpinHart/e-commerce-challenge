import React, { Component } from "react";
import api from "../api";
import ProductCard from "./ProductCard";
import ShoppingCart from './ShoppingCart'
import { Input } from 'reactstrap'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      allItems: [],
      cartItems: [],
      email: "",
      user: {},
      search: "",
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
  handleSearchInput(searchValue){
    this.setState({
      search: searchValue
    })
  }

  handleCompleteOrder(event, products){
    event.preventDefault()
    const _user = this.state.user._id
    const _products = this.state.cartItems.map(e=> e._id)
    api.postOrder({_user, _products})
      .then(res => console.log(res))
    
  }
  isEmailCorrect() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }
  render() {
    let lowerSearch = this.state.search.toLowerCase()
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
        <Input
            name="filter"
            placeholder="Filter the seach"
            value={this.state.search}
            onChange={e => this.handleSearchInput(e.target.value)}
          />  
        {this.state.allItems
          .filter(product => product.title.toLowerCase().includes(lowerSearch))
          .map(product => (
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
