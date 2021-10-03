export const SET_METEO = (state, meteos) => {
  state.meteos = meteos
}
export const RESERVER = (state, { id, index }) => {
  state.meteos.splice(index, 1)
}
