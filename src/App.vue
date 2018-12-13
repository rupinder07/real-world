<template>
  <div class="container">
    <div id="app">
      <RealWorldHeader/>
      <router-view></router-view>
      <RealWorldFooter/>
    </div>
  </div>
</template>


<script>
import RealWorldHeader from "@/components/RealWorldHeader"
import RealWorldFooter from "@/components/RealWorldFooter"
export default {
  name: "App",
  components: {
    RealWorldHeader,
    RealWorldFooter
  }
};
</script>



<style>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
