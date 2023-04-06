export const state = () => ({
    counter: 0,
    wallpaper: "",
    locales: ["zh_CN", "en_US"],
    locale: "zh_CN"
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    reduce(state) {
        state.counter--
    },
    selectWallPaper(state, data) {
        console.log("selectWallPaper -----> ", state.wallpaper);
        var length = data.wallpaper.length;
        var index = data.wallpaper.lastIndexOf("/");
        state.wallpaper = data.wallpaper
        // state.wallpaper = data.wallpaper.substring(index + 1, length)
        console.log("selectWallPaper -----> ", state.wallpaper);
    },
    setLang(state, locale) {
        console.log("setLang", locale)
        if (state.locales.indexOf(locale.value) !== -1) {
            state.locale = locale.value
            console.log("setLang", "??")
        }
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