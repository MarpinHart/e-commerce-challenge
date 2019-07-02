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
    return service.get('/')
      .then(res => console.log(res.data))
      .catch(errHandler)
  }
}