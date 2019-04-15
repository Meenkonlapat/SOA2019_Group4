<template>
  <div id="navigations">
<b-navbar varinat="faded" type="light container">
    <b-navbar-brand href="#"><img src="../assets/refixLogo.png" fluid alt="logo" class="imgLogo"></b-navbar-brand>
</b-navbar>

    <b-nav class="container">
    <b-col><a href="#"><b-nav-item class="navbar-item">Home</b-nav-item></a></b-col>
    <b-col><a href="#"><b-nav-item class="navbar-item">Status</b-nav-item></a></b-col>
    <b-col><a href="#"><b-nav-item class="navbar-item">Message</b-nav-item></a></b-col>
    <b-col><a href="#"><b-nav-item class="navbar-item">Login</b-nav-item></a></b-col>
  </b-nav>
  </div>
</template>

<style>
.item{
  color: aliceblue;
    text-align: center;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.navbar-item:link{
  color: white;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.navbar-item:hover{
  color: white;
  background-color: wheat;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.navbar-item:active{
  color: white;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
</style>
