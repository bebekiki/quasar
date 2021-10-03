// import { api } from 'boot/axios'
// const state = {
//   meteos: []
// }

// const actions = {
//   async getMeteos ({ commit }) {
//     await api.get('/articles')
//       .then(response => {
//         commit('SET_METEO', response.data.data)
//       })
//   },
//   reserver ({ commit }, { id, index }) {
//     commit('RESERVER', { id, index })
//   }
// }

// const mutations = {
//   SET_METEO (state, meteos) {
//     state.meteos = meteos
//   },
//   RESERVER (state, { id, index }) {
//     state.meteos.splice(index, 1)
//   }
// }

// const getters = {
//   meteos: (state) => {
//     return state.meteos
//   },
//   count: (state) => {
//     return state.count++
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   actions,
//   mutations,
//   getters
// }
