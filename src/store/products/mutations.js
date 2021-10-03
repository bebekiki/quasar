
export function DELETE (state, { id, index }) {
  state.products.splice(index, 1)
}

export function ADD_PRODUCT (state, product) {
  product.id = state.products.length + 1
  state.products.push(product)
}

export function EDIT_PRODUCT (state, { index, product }) {
  state.products[index] = product
}
