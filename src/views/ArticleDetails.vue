<template>
    <div class="container">
        <div class="row">
            <div class="banner">
            <h1>{{article.title}}</h1>
            <User :username='username' :updatedAt='updatedAt'/>
            </div>
        </div>
        <div class="row">
            {{article.description}}
        </div>
        
    
    </div>
</template>

<script>

import User from '@/components/User'

export default {
    name: 'ArticleDetails',
    props: [
        'article',
        'username',
        'updatedAt'
    ],
    components: {
        User
    }
}
</script>

<style>
    .banner h1 {
        padding-left: 50px;
        text-align: left
    }
</style>


