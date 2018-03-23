import shop from '../../api/shop'

// Initialer State
const state = {
  all: []
}

// Getter
const getters = {
  allCategoryProducts: state => state.all
}

// Actions
const actions = {
  getAllCategoryProducts ({ commit }, category) {
    shop.getProductsForCategory(category, products => {
      commit('setCategoryProducts', products)
    })
  }
}

// Mutationen
const mutations = {
  setCategoryProducts (state, products) {
    state.all = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}