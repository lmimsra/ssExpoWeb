export const state = () => ({
  isMenuActive: false,
  activePage: 0
})
export const mutations = {
  toggleMenu(state) {
    state.isMenuActive = !state.isMenuActive
  },
  resetMenu(state) {
    state.isMenuActive = false
  },
  SWITCH_ACTIVE_PAGE(state, next) {
    state.activePage = next
  }
}
export const getters = {}
export const actions = {
  switchActivePage({ state, commit }, next) {
    commit('SWITCH_ACTIVE_PAGE', next)
  }
}
