export const state = () => ({
    list: []
})

export const mutations = {
    update(state, data) {
        console.log(state)
        console.log(data)
        state.list = data.list
    }
}

export const actions = {
    fetchList({ commit }) {
        return this.$axios.$get('/api/data/Android/10/1').then((result) => {
            commit('update', {
                list: result.results
            })
        });
    }
}