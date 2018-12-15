<template>
    <div class="article-list-container">
        <b-tabs>
            <b-tab v-if="isLoggedIn" title="Your Feed" active @click="userFeed">
                 <Article :articles="getUserArticles"/>
            </b-tab>
            <b-tab title="Global Feed" >
                <Article :articles="getGlobalArticles"/>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>

import ArticleService from '@/services/articleservice'
import Article from '@/components/Article'

export default {
    name: 'ArticleListView',
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.getUser != null;
        },
        getUserArticles: function() {
            return this.$store.getters.getUserArticles;
        },
        getGlobalArticles: function() {
            return this.$store.getters.getGlobalArticles;
        }
    },
    methods: {
        userFeed: function() {
            let store = this.$store;
            ArticleService.fetchUserArticles(this.$store.getters.getUser.token)
            .then(response => {
                store.dispatch('setUserArticles', response.data.articles);
            })
            .catch(error => console.log(error))
        },

        globalFeed: () => {
            let store = this.$store;
            ArticleService.fetchGlobalArticles()
            .then(response => {
                store.dispatch('setGlobalArticles', response.data.articles);
            })
            .catch(error => console.log(error))
        }
    },
    created() {
        let store = this.$store;
        ArticleService.fetchGlobalArticles()
            .then(response => {
                store.dispatch('setGlobalArticles', response.data.articles);
            })
            .catch(error => console.log(error))
    },
    components: {
        Article
    }
}
</script>


<style>
    .article-list-container {
        max-width: 80%;
        padding-left: 10%;
        padding-right: 10%;
    }

    .button-container {
        max-height: 20%;
    }

    .button-container button{
        padding: 10px 24px;
        border: none;
        color: gray;
        background-color: inherit;
    }
</style>

