<template>
  <div id="navigations">
    <router-link to="/">
      <img
        src="../assets/refixLogo.png"
        alt="image logo"
        fluid
        class="imgLogo"
        style="padding-top: 7px;"
      >
    </router-link>

    <nav class="nav container">
      <router-link to="/" router-link-active tag="li" class="col">
        <a class="nav-link">Home</a>
      </router-link>

      <router-link to="/status" router-link-active tag="li" class="col">
        <a class="nav-link">Status</a>
      </router-link>

      <router-link to="/messenger" router-link-active tag="li" class="col">
        <a class="nav-link">Message</a>
      </router-link>

      <template v-if="!currentUser.name">
        <router-link to="/login" router-link-active tag="li" class="col">
          <a class="nav-link">Login</a>
        </router-link>
      </template>

      <template v-else>
        <router-link to="/" router-link-active tag="li" class="col">
          <div @click="logOut()"><a class="nav-link">LogOut</a></div>
        </router-link>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logOut(){
      if (confirm("Do you want to logout?"))
      {
        this.$store.dispatch("commitCurrentUser", {name:"", ID:""});
        this.$store.dispatch("commitIsCompany", false);
      }
    }
  },
  computed:{
    currentUser:{
      get() {
        return this.$store.getters["getCurrentUser"];
      }
    },
    inLoginPage:{
      get(){
        return this.$store.getters["getInLoginPage"];
      }
    }
  }
};
</script>

<style>
#navigations {
  background-image: linear-gradient(120deg, #2c92eb 0%, #2857d8 100%);
  font-family: "Playfair Display", serif;
}
.nav-link {
  color: #fff;
  text-align: center;
}
.nav-link:hover {
  background-color: #fff;
  color: #2c92eb;
  -webkit-border-top-left-radius: 4px;
  -webkit-border-top-right-radius: 4px;
  -moz-border-radius-topleft: 4px;
  -moz-border-radius-topright: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.nav-link:active {
  background-color: aliceblue;
  -webkit-border-top-left-radius: 4px;
  -webkit-border-top-right-radius: 4px;
  -moz-border-radius-topleft: 4px;
  -moz-border-radius-topright: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
img.imgLogo {
  width: 12%;
  height: 12%;
}
</style>

