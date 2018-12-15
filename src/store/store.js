import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

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

const ArticleModule = {
    state: {
        userArticles: [],
        globalArticles: []
    },
    getters: {
        getGlobalArticles: state => state.globalArticles,
        getUserArticles: state => state.userArticles
    },
    mutations: {
        setGlobalArticles: (state, articles) => state.globalArticles = articles,
        setUserArticles: (state, articles) => state.userArticles = articles
    },
    actions: {
        setGlobalArticles: (store, articleList) => store.commit('setGlobalArticles', articleList),
        setUserArticles: (store, articleList) => store.commit('setUserArticles', articleList)
    }
}

const store = new Vuex.Store({
    modules: {
        user: UserModule,
        tags: TagModule,
        articles: ArticleModule
    }
});

export default store;