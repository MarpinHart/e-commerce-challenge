import React, { Component } from 'react'
import api from '../api'

class ProductList extends Component {
  constructor(props){
    super(props)
    this.state= {
      items: []
    }
  }
  render() {
    return (
      <div>
        <p>Uagliao tappost</p>
      </div>
    )
  }
  componentDidMount(){
    console.log("figa")
    api.getProductsList()
      .then(res => console.log(res, "as res"))
  }
}

export default ProductList
