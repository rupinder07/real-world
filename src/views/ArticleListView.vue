<template>
    <div class="article-list-container">
        <b-tabs>
            <b-tab v-if="isLoggedIn" title="Your Feed" active @click="userFeed">
                 <Article :articles="getUserArticles"/>
            </b-tab>
            <b-tab title="Global Feed" >
                <Article :articles="paginatedFeed"/>
                <ul class="pagination justify-content-center">
                    <li class="page-item" v-for="index in pageCount" :key="index">
                        <button class="page-link" @click="onPage(index)"> {{index}}</button>
                    </li>
                </ul>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>

import ArticleService from '@/services/articleservice'
import Article from '@/components/Article'

export default {
    name: 'ArticleListView',
    data() {
        return {
            pageNumber: 0
        }
    },
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.getUser != null;
        },
        getUserArticles: function() {
            return this.$store.getters.getUserArticles;
        },
        pageCount() {
            return Math.ceil(this.$store.getters.getGlobalArticles.length/5)
        },
        paginatedFeed() {
            let start = this.pageNumber * 5;
            let end  = start + 5;
            return this.$store.getters.getGlobalArticles.slice(this.pageNumber * 5, end)
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
        },

        onPage(index) {
            this.pageNumber = index - 1;
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
        margin-bottom: 10px;
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

