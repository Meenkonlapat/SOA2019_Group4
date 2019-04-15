<template>
  <div id="app">
    <div id="navigations">
      <navigation/>
    </div>
    <div id="contents">
      <Home msg="Welcome to Refix. I will help you 24Hr."/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import navigation from './components/navigation.vue';

export default {
  name: 'app',
  components: {
    navigation,
    Home
  }
}
</script>

<style>
img.imgLogo{
  width: 10%;
  height: 10%;
}
#navigations{
  background-image: linear-gradient(120deg, #2857D8 0%, #2C92EB 100%);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
