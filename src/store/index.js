import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex, Axios)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    getWordpressPost({commit}) {
      Axios
        .get('https://wordpress.simonschaminee.nl/wp-json/wp/v2/posts')
        .then(data => {
          let posts = data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    }

  },
  modules: {
  }
})
