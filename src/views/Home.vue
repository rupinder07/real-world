<template>
    <div>
      <div class="banner">
        <h1>conduit</h1>
        <h2>A place to share your knowledge</h2>
      </div>
      <div class="container-inner">
        <div class="container-left">
          <ArticleListView/>
        </div>
        <div class="container-right">
          <Tags/>
        </div>
      </div>
    </div>
</template>

<script>

import Tags from './Tags'
import ArticleListView from './ArticleListView'

export default {
  name: 'home',
  components: {
    Tags,
    ArticleListView
  }
}
</script>


<style>

  .banner {
    background-color: #5cb85c;
    border: 1px 1px;
    height: 200px;
    text-align: center;
    padding: 1rem;
    color: #fff
  }

  .banner h1{
    font-family: titillium web,sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .banner h2 {
    font-family: titillium web,sans-serif;
    font-weight: 200;
    font-size: 2rem;
  }

  .container-inner {
    padding-top: 30px; 
  }

  .container-left,
  .container-right {
    display: inline-block;
    position: relative;
  }

  .container-left {
    width: calc(70% - 30px);
    margin-right: 30px;
  }

  .container-right {
    width: 30%;
  }
</style>
