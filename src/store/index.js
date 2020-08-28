import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import posts from './modules/posts'
import cardsData from './modules/cardsData'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  modules: {
    posts,
    cardsData
  }
})
