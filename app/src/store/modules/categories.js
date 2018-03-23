import shop from '../../api/shop'

//Initialer State
const state = {
  all: []
}

// Getter
const getters = {
  allCategories: state => state.all
}

// Actions
const actions = {
  getAllCategories ({ commit }) {
    shop.getCategories(categories => {
      commit('setCategories', categories)
    })
  }
}

// Mutationen
const mutations = {
  setCategories (state, categories) {
    state.all = categories
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}