import axios from 'axios'

const cardsData = {
    namespaced: true,
    state: {
        cardsData: [],
    },
    mutations: {
        SET_CARDSDATA(state, data) {
            state.cardsData = data
        }
    },
    actions: {
        loadcardsData({ commit }) {
            axios
                .get('https://wordpress.simonschaminee.nl/wp-json/wp/v2/cards')
                .then(response => {
                    commit('SET_CARDSDATA', response.data)
                    console.log(response)
                })
                .catch(error => console.log(error))
        }
    }
}

export default cardsData