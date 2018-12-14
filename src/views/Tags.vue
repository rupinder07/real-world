<template>
    <div class="tag-container">
        <label>Popular Tags</label>
        <ul>
            <li v-for="tag in tags" :key="tag">
                <a href="#">{{tag}}</a>
            </li>
        </ul>
    </div>    
</template>

<script>

    import TagService from '@/services/tagservice'

    export default {
        name: 'Tags',
        data() {
            return {
                tags: this.$store.getters.getTags
            }
        },
        created() {
            let store = this.$store;
            TagService.fetchTags()
            .then(response => {
                store.dispatch('setTags', response.data.tags)
            })
        }
    }
</script>


<style>
    .tag-container {
        background-color: #F3F3F3;
        width: 80%
    }

    .tag-container label {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding-left: 10px;
        font-size: 20px
    }

    .tag-container ul {
        list-style-type: none
    }

    .tag-container li {
        display: inline-block;
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
    }

    .tag-container a {
        background-color: #687077;
        padding: 2px 10px;
        border-radius: 10rem;
        color: white;
        text-decoration: none;
    }
</style>
