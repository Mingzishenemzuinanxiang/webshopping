import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        goods: {}
    },
    mutations: {
        add(state, data) {
            state.goods = data
        }
    },
    actions: {
        addgoods(context, data) {
            context.commit('add', data)
        }
    },
    modules: {}
})