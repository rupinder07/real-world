<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="article in articles" :key="article.slug">
                <div class="row">
                    <div class="col-2">
                        <b-img slot="aside" blank blank-color="#ccc" width="42" alt="placeholder" rounded="circle"/> 
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <b-link style="color:#9EC59E" href="#">{{article.author.username}}</b-link>
                        </div>
                        <div class="row">
                            <h6 style="color:#C1CADE"> {{article.updatedAt}} </h6>
                        </div>
                    </div>
                </div>
                <div class="row  margin-top-10">
                    <h2> {{article.title}} </h2> 
                </div>
                <div class="row  margin-top-10">
                    <h5> {{article.description}}</h5>
                </div>
                <div class="row  margin-top-10">
                    <a href="#" style="text-decoration:none; color:#C1CADE"> Read more...</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: [
        'articles'
    ]
}
</script>


<style>
    .margin-top-10 {
        margin: 10px
    }
</style>

