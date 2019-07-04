export const state = () => ({
    counter: 0,
    wallpaper: "wallpaper1.jpeg"
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    reduce(state) {
        state.counter--
    },
    selectWallPaper(state, data) {
        var length = data.wallpaper.length;
        var index = data.wallpaper.lastIndexOf("/");
        state.wallpaper = data.wallpaper.substring(index + 1,length)
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