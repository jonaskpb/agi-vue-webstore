
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import categories from './modules/categories'
import category from './modules/category'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
    category
  },
  strict: debug
})