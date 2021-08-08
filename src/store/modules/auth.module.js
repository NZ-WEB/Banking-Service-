import globalConsts from "../../globalConsts";
export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(globalConsts.TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(globalConsts.TOKEN_KEY, token)
        },
        logOut(state) {
            state.token = null
            localStorage.removeItem(globalConsts.TOKEN_KEY)
        }
    },
    actions: {
        async login({commit}, payload) {
            commit('setToken', 'TEST TOKEN')
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}
