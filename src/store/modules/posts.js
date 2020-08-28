import axios from 'axios'

const posts = {
    namespaced: true,
    state: {
        posts: [],
    },
    mutations: {
        SET_POSTS(state, data) {
            state.posts = data
        }
    },
    actions: {
        loadPosts({ commit }) {
            axios
                .get('https://wordpress.simonschaminee.nl/wp-json/wp/v2/posts')
                .then(response => {
                    commit('SET_POSTS', response.data)
                })
                .catch(error => console.log(error))
        }
    }
}

export default posts