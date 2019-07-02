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
            default:
                state.android.page += 1;
                state.android.datas.push(...data.list)
                break;
        }

    }
}

export const actions = {
    loadTech({ commit }, { data }) {
        console.log("loadTech", data)
        return this.$axios.$get(`/api/data/${data.category}/10/1`).then((result) => {
            commit('update', {
                list: result.results,
                category: data.category
            })
        });
    }
}