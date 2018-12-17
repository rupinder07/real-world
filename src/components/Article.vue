<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="article in articles" :key="article.slug">
                <User :username="article.author.username" :updatedAt="article.updatedAt" />
                <div class="row  margin-top-10">
                    <h2> {{article.title}} </h2> 
                </div>
                <div class="row  margin-top-10">
                    <h5> {{article.description}}</h5>
                </div>
                <div class="row  margin-top-10">
                    <router-link :to="{name: 'article-details', params: {slug: article.slug}}" style="text-decoration:none; color:#C1CADE"> Read more...</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import User from '@/components/User'

export default {
    name: 'Article',
    props: [
        'articles'
    ],
    components: {
        User
    }
}
</script>


<style>
    .margin-top-10 {
        margin: 10px
    }
</style>

