export const state = () => ({
    counter: 0,
    wallpaper: "wallpaper3.jpeg"
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    reduce(state) {
        state.counter--
    },
    selectWallPaper(state, data) {
        console.log("selectWallPaper", data)
        state.wallpaper = data.wallpaper
    }
}

export const actions = {
    changeWallPaper({ commit }, { data }) {
        console.log("changeWallPaper", data)
        commit("selectWallPaper", {
            wallpaper: data.wallpaper
        })
    }
}