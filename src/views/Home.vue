<template>
    <div>
      <div class="banner home">
        <div class="container text-center" >
        <h1>conduit</h1>
        <h2>A place to share your knowledge</h2>
        </div>
      </div>
      <div class="container">
        <div class="row margin-top-30">
          <div class="col-8">
            <ArticleListView/>
          </div>
          <div class="col-4">
            <Tags/>
          </div>
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

  .banner.home h1{
    font-family: titillium web,sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  .banner h2 {
    font-family: titillium web,sans-serif;
    font-weight: 200;
    font-size: 2rem;
  }

  .margin-top-30 {
    padding-top: 30px; 
  }
</style>
