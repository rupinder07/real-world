<template>
    <div class="container">
            <div class="banner">
                <h1>{{article.title}}</h1>
                <User :username='username' :updatedAt='updatedAt'/>
            </div>
            {{article.description}}
            <User :username='username' :updatedAt='updatedAt'/>
            <textarea class="form-control" rows="5" id="commentarea" v-model="comment" placeholder="Write a comment..."></textarea>
            <button type="submit" class="btn btn-success align-right"  @click="addComment">Post Comment</button>
            <br/>
            <br/>
            <h3 class="align-center"> Comments </h3>
            <ul class="list-group" v-for="c in commentList" :key="c.id">
                <li class="list-group-item">
                    <div>
                        {{c.body}}
                        <button type="button" class="btn btn-light align-right" v-if="c.author.username == currentUser">Edit</button>
                        <button type="button" class="btn btn-danger align-right" v-if="c.author.username == currentUser">Delete</button>
                    </div>
                    
                    
                </li>
            </ul>
    </div>
</template>

<script>

import User from '@/components/User'
import AxiosService from '@/services/baseaxiosservice'

export default {

    name: 'ArticleDetails',
    data() {
        return {
            comment: null,
            commentList: []
        }
    },
    props: [
        'article',
        'username',
        'updatedAt'
    ],
    components: {
        User
    },

    computed: {
        currentUser() {
            return this.$store.getters.getUser.username;
        }
    },
    
    methods: {
        addComment() {
            document.getElementById('commentarea').textContent = 'Write a comment...'
            let router = this.$router; 
            let store = this.$store;
            AxiosService.post('articles/'+ this.article.slug+'/comments',
            {
                "comment": {
                    "body":this.comment
                },
            },
            this.$store.getters.getUser.token)
            .then((response) => {  
                router.push({name: 'article-details', slug: this.article.slug});
            })
            .catch((error) => console.log(error));
        }
    },
    created() {
            AxiosService.get('articles/'+ this.article.slug+'/comments',
            this.$store.getters.getUser.token)
            .then((response) => {
               this.commentList =  response.data.comments
            })
            .catch((error) => console.log(error)); 
        }
}
</script>

<style>
    .banner h1 {
        padding-left: 50px;
        text-align: left
    }
</style>


