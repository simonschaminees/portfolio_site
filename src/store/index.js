import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    posts: [],
    cards: []
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_CARDS (state, WPcards) {
      state.WPcards = WPcards
    }
  },
  actions: {
    getWordpressPost({commit}) {
      axios.get('https://wordpress.simonschaminee.nl/wp-json/wp/v2/posts')
        .then(data => {
          let posts = data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getWPcards({commit}) {
      axios.get('https://wordpress.simonschaminee.nl/wp-json/wp/v2/cards')
        .then(data => {
          let WPcards = data.data
          commit('SET_CARDS', WPcards)
        })
        .catch(error => {
          console.log(error)
        })
    }

  },
  modules: {
  }
})
