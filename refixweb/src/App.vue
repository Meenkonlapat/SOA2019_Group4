<template>
  <div id="app">
    <b-navbar varinat="faded" type="light">
    <b-navbar-brand href="#"><img src="./assets/refixLogo.png" fluid alt="logo" class="imgLogo"></b-navbar-brand>
    </b-navbar>
    <HelloWorld msg="Welcome to Refix. I will help you 24Hr."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
.item:hover{
  color: black;
  background-color: aliceblue;
}
img.imgLogo{
  width: 10%;
  height: 10%;
}
#app {
  background-image: linear-gradient(120deg, #2857D8 0%, #2C92EB 100%);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
