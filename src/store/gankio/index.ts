export const state = () => ({
    android: {
        page: 1,
        datas: []
    },
    ios: {
        page: 1,
        datas: []
    },
    girls: {
        page: 1,
        datas: []
    }
})

export const mutations = {
    update(state, data) {
        switch (data.category) {
            case "Android":
                state.android.page += 1;
                state.android.datas.push(...data.list)
                break;
            case "iOS":
                state.ios.page += 1;
                state.ios.datas.push(...data.list)
                break;
            case "福利":
                state.girls.page += 1;
                state.girls.datas.push(...data.list)
                break;
            default:
                state.android.page += 1;
                state.android.datas.push(...data.list)
                break;
        }
    },
    clear(state){
        var empty = {
            page: 1,
            datas: []
        }
        state.android = empty
        state.ios = empty
        state.girls = empty
    }
}

export const actions = {
    loadTech({ commit,state}, { data }) {
        var page = getPage(state,data.category)
        console.log("loadTech", `${data}-----${page}`)
        return this.$axios.$get(`/gankapi/api/data/${data.category}/10/${page}`).then((result) => {
            commit('update', {
                list: result.results,
                category: data.category
            })
        });
    },
    resetAll({commit}){
        commit('clear')
    }
}

export function getPage(state,category){
    switch (category) {
        case "Android":
            return state.android.page;
        case "iOS":
            return state.ios.page;
            break;
        case "福利":
            return state.girls.page;
        default:
            return state.android.page;
    }
}