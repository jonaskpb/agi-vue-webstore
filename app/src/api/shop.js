import axios from 'axios'

export default {
  getHighlightedProducts (callback) {
    axios.get("http://localhost:3000/items")
    .then(resp => {
        callback(resp.data)
    })
    .catch(err => {
        console.log(err)
    })
  },  

  getAllProducts (callback) {
    axios.get("http://localhost:3000/items/all")
    .then(resp => {
        callback(resp.data)
    })
    .catch(err => {
        console.log(err)
    })
  },

  buyProducts (products, callback, errorCallback) {
    axios.post("http://localhost:3000/checkout", products)
    .then(resp => {
        callback()
    })
    .catch(err => {
        console.log(err)
        errorCallback()
    })
  },

  getCategories (callback) {
    axios.get("http://localhost:3000/categories")
    .then(resp => {
        callback(resp.data)
    })
    .catch(err => {
        console.log(err)
    })
  },

  getProductsForCategory(cat_name, callback) {
    axios.get("http://localhost:3000/items/cat/" + cat_name)
    .then(resp => {
        callback(resp.data)
    })
    .catch(err => {
        console.log(err)
    })
  }
}