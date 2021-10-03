// const state = {
//   products: [
//     {
//       id: 1,
//       title: 'Shirt',
//       price: '$40'
//     },
//     {
//       id: 2,
//       title: 'Trouser',
//       price: '$10'
//     },
//     {
//       id: 3,
//       title: 'Jean',
//       price: '$50'
//     }
//   ]
// }

// const actions = {
//   deleteProduct ({ commit }, { id, index }) {
//     commit('DELETE', { id, index })
//   },
//   addProduct ({ commit }, product) {
//     commit('ADD_PRODUCT', product)
//   }
// }

// const mutations = {
//   DELETE (state, { id, index }) {
//     state.products.splice(index, 1)
//   },
//   ADD_PRODUCT (state, product) {
//     product.id = state.products.lenght + 1
//     // const newProduct = {
//     //   id: state.products.length + 1,
//     //   title: product.title,
//     //   price: product.price
//     // }
//     state.products.push(product)
//   }
// }
// const getters = {
//   allProducts: (state) => {
//     return state.products
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   actions,
//   mutations,
//   getters
// }
