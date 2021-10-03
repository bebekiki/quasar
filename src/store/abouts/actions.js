import { api } from 'boot/axios'

export async function getMeteos ({ commit }) {
  await api.get('/articles')
    .then(response => {
      commit('SET_METEO', response.data.data)
    })
}

export function reserver ({ commit }, { id, index }) {
  commit('RESERVER', { id, index })
}
