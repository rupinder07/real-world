import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const UserModule = {
    state: {
        user: null
    },
    getters: {
        getUser(state){
            return state.user;
        }
    },
    mutations: {

        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        login: (store, user) => {
            store.commit('setUser', user);
        }
    }
}

const store = new Vuex.Store({
    modules: {
        user: UserModule
    }
});

export default store;