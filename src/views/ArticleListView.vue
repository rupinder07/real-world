<template>
    <div class="article-list-container">
        <div class="button-container">
            <button @click="userFeed">Your Feed</button>
            <button @click="globalFeed">Global Feed</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleListView'
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

