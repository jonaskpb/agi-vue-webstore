import shop from '../../api/shop'

// Initialer State
const state = {
  all: [],
  highlighted: []
}

// Getter
const getters = {
  allProducts: state => state.all,
  highlightedProducts: state => state.highlighted
}

// Actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getAllProducts(products => {
      commit('setProducts', products)
    })
  },
  getHighlightedProducts ({ commit }) {
    shop.getHighlightedProducts(products => {
      commit('setHighlightedProducts', products)
    })
  }
}

// Mutationen
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
  setHighlightedProducts (state, products) {
    state.highlighted = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}