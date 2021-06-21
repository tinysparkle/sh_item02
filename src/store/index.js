import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: sessionStorage.getItem('user') || '',
    users: [
      {username: 'admin', password: '123', date: '2019-06-06 19:45'},
      {username: 'lucy', password: '456', date: '2020-07-06 10-:21'},
      {username: 'judy', password: '789', date: '2021-03-12 21:35'},
      {username: 'zhangsan', password: '6786', date: '2021-05-12 21:35'},
      {username: 'wangwu', password: '1231', date: '2021-04-12 21:35'},
      {username: 'koko', password: '9090', date: '2021-01-10 21:35'},
      {username: 'siler', password: '0998', date: '2021-03-03 21:35'},
    ],
    isAdmin: JSON.parse(sessionStorage.getItem('isAdmin')) || false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_USERS(state, user) {
      state.users.push(user)
    },
    SET_ADMIN(state, isAdmin) {
      state.isAdmin = isAdmin
    },
    EDIT_USER(state, user) {
      const { users } = state
      for(let i = 0; i < users.length; i++) {
        if(users[i].date === user.date) {
          users.splice(i, 1, user)
        }
      }
    },
    DELE_USER(state, user) {
      const { users } = state
      for(let i = 0; i < users.length; i++) {
        if(users[i].date === user.date) {
          users.splice(i, 1)
        }
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
