const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  CHANGECITY (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
export default mutations
