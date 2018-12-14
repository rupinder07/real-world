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

const TagModule = {
    state: {
        tags: []
    },
    getters: {
        getTags: state => state.tags
    },
    mutations: {
        setTags: (state, tagsList) => state.tags = tagsList
    },
    actions: {
        setTags: (store, tagsList) => store.commit('setTags', tagsList)
    }
}

const store = new Vuex.Store({
    modules: {
        user: UserModule,
        tags: TagModule
    }
});

export default store;