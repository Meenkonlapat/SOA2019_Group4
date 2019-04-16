<template>
  <div id="navigations">
    <div class="imgLogo container">
      <router-link to="/"><img src="../assets/refixLogo.png" alt="image logo" fluid class="imgLogo" style="padding-top: 7px;"></router-link>
    </div>

    <nav class="nav container">
      <router-link to="/" router-link-active tag="li" class="col"><a class="nav-link">Home</a></router-link>
      <router-link to="/components" router-link-active tag="li" class="col"><a class="nav-link">Status</a></router-link>
      <router-link to="/components" router-link-active tag="li" class="col"><a class="nav-link">Message</a></router-link>
      <router-link to="/components" router-link-active tag="li" class="col"><a class="nav-link">Profile</a></router-link>
    </nav>
  </div>
</template>

<style>
.nav-link{
  color: black;
  text-align: center;
}
.nav-link:hover{
  background-color: aliceblue;
  -webkit-border-top-left-radius: 4px;
-webkit-border-top-right-radius: 4px;
-moz-border-radius-topleft: 4px;
-moz-border-radius-topright: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
}
.nav-link:active{
  background-color: aliceblue;
  -webkit-border-top-left-radius: 4px;
-webkit-border-top-right-radius: 4px;
-moz-border-radius-topleft: 4px;
-moz-border-radius-topright: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
}
</style>
