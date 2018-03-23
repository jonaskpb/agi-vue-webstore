import shop from '../../api/shop'

//Initialer State
const state = {
  added: [],
  checkoutStatus: null
}

// Getter
const getters = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: (state, getters, rootState) => {
    return state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product._id === id)
      return {
        title: product.name,
        imgUrl: product.imgUrl,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}
// Actions
const actions = {
  // Kaufen der im Einkaufswagen befindlichen Produkte
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    
    commit('setCheckoutStatus', null)
    
    // Leeren des Einkaufswagens
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // Rollback, da etwas nicht geklappt hat
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  // Produkt zum Einkaufswagen hinzufuegen
  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    
    // Prinzipiell könnte hier noch ein Check gemacht werden, 
    // ob das Produkt auf Lager ist.
    // Diese Funktion wurde entfernt, da sie den Rahmen sprengen würde.
    const cartItem = state.added.find(item => item.id === product._id)
    if (!cartItem) {
      // Wenn Produkt nicht in Einkaufswagen, lege es an
      commit('pushProductToCart', { id: product._id })
    } else {
      // Wenn Produkt bereits im Einkaufswagen, erhöhe Menge
      commit('incrementItemQuantity', cartItem)
    }
  }
}

// mutations
const mutations = {
  pushProductToCart (state, { id }) {
    state.added.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.added = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}