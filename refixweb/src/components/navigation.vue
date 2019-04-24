<template>
    <div id="navigations">
        <router-link to="/">
            <img src="../assets/refixLogo.png" alt="image logo" fluid class="imgLogo" style="padding-top: 7px;">
        </router-link>

        <nav class="nav container">
            <router-link to="/" router-link-active tag="li" class="col">
                <a class="nav-link">Home</a>
            </router-link>

            <router-link to="/status" router-link-active tag="li" class="col">
                <a class="nav-link">Status</a>
            </router-link>

            <router-link to="/message" router-link-active tag="li" class="col">
                <a class="nav-link">Messenger</a>
            </router-link>

            <router-link to="/login" router-link-active tag="li" class="col">
                <a class="nav-link">Login</a>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#navigations{
  background-image: linear-gradient(120deg, #2c92eb 0%, #2857D8 100%);
  font-family: 'Playfair Display', serif;
}
.nav-link{
  color: #fff;
  text-align: center;
}
.nav-link:hover{
  background-color: #fff;
  color: #2C92EB;
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
img.imgLogo{
  width: 12%;
  height: 12%;
}
</style>

