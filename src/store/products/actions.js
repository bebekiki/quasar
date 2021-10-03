
export function deleteProduct ({ commit }, { id, index }) {
  commit('DELETE', { id, index })
}
export function addProduct ({ commit }, product) {
  commit('ADD_PRODUCT', product)
}

export function editProduct ({ commit }, { index, product }) {
  commit('EDIT_PRODUCT', { index, product })
}
