<template>
    <div class="container">
        <div class="row">
              
        </div>
        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="title" placeholder=" Article Title">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="description" placeholder="What's this article about?">
                    </div>
                    <div class="form-group">
                        <input type="textarea" class="form-control" v-model="body" placeholder="Write your article (in markdown)">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="tags" placeholder="Enter tags">
                    </div>
                    <button type="submit" class="btn btn-success align-right"  @click="publish">Publish Article</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import AxiosService from "@/services/baseaxiosservice";

export default {
    name: 'Editor',
    data() {
        return {
            title: null,
            body: null,
            description: null,
            tags: []
        }
    }, 
    methods: {
        publish() {
            let router = this.$router;
            AxiosService.post('articles', {
                "article": {
                    "title":this.title,
                    "description":this.description,
                    "body":this.body,
                    "tagList":this.tags 
                }
            },
            this.$store.getters.getUser.token)
            .then(() => {   
                router.push('home');
            })
            .catch((error) => console.log(error));
        }
    }
}
</script>

<style>
    .align-right {
        float: right;
    }

</style>


