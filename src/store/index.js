import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    /* 表示ユーザー切り替え用 */
    user: 'guest',
    /* input用 */
    input: {
      'name': null,
      'tel': null,
      'sex': null,
      'job': null,
      'tools': [],
      'free': null
    },
    /* モーダル切り替え用 */
    modal: false,
    /* マスク替え用 */
    mask: false,
    /* ページ全体の高さ用 */
    height: document.documentElement.scrollHeight || document.body.scrollHeight,
    /* スクロール量 */
    scroll: 0,
    /* 記事 */
    article: {
      'current': 0,
      'limit': 0
    },
    /* データページ */
    data: null
  },

  getters: {
    user (state) {
      return state.user
    },
    input (state) {
      return state.input
    },
    modal (state) {
      return state.modal
    },
    mask (state) {
      return state.mask
    },
    height (state) {
      return state.height
    },
    scroll (state) {
      return state.scroll
    },
    article (state) {
      return state.article
    },
    data (state) {
      return state.data
    }
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload.user
    },
    setInput (state, payload) {
      state.input.name = payload.name
      state.input.tel = payload.tel
      state.input.sex = payload.sex
      state.input.job = payload.job
      state.input.tools = payload.tools
      state.input.free = payload.free
    },
    setModal (state, payload) {
      state.modal = payload
    },
    setMask (state, payload) {
      state.mask = payload
    },
    setHeight (state, payload) {
      state.height = payload
    },
    setScroll (state, payload) {
      state.scroll = payload
    },
    setArticle (state, payload) {
      state.article = payload
    },
    setData (state, payload) {
      state.data = payload
    }
  },

  actions: {
    userData ({commit}, user) {
      commit('setUser', {user})
    },
    inputData ({commit}, input) {
      commit('setInput', {input})
    },
    modalData ({commit}, modal) {
      commit('setModal', {modal})
    },
    maskData ({commit}, mask) {
      commit('setMask', {mask})
    },
    heightData ({commit}, height) {
      commit('setHeight', {height})
    },
    scrollData ({commit}, scroll) {
      commit('setScroll', {scroll})
    },
    articleData ({commit}, article) {
      commit('setArticle', {article})
    },
    dataData ({commit}, data) {
      commit('setData', {data})
    }
  }
})
