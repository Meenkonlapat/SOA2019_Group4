<template>
  <div>
    <Navigation v-if="!inLoginPage"/>
    <!-- {{currentUser.name}} -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Navigation from "./components/navigation.vue";

export default {
  components: {
    Home,
    Navigation
  },
  computed: {
    inLoginPage: {
      get() {
        return this.$store.getters["getInLoginPage"];
      }
    },
    currentUser:{
        get(){
            return this.$store.getters["getCurrentUser"];
        }
    }
  }
};
</script>
<style>
</style>
