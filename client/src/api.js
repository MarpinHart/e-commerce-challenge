import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:5000',
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service, 

  getProductsList(){
    return service.get('/products')
      .then(res => res.data)
      .catch(errHandler)
  },

  postEmail(email){
    return service.post('/user', email)
      .then(res => res)
      .catch(errHandler)
  },

  postOrder(order){
    return service.post('/orders', order)
      .then(res => res)
      .catch(errHandler)
  }
}