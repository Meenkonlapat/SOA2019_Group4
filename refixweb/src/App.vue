<template>
    <div>
        <Navigation/>

        <router-view></router-view>
    </div>
</template>

<script>
import Home from "./components/Home.vue";
import Navigation from "./components/Navigation.vue";
import Status from "./components/Status.vue"
import Message from "./components/Message.vue"

export default {
    components : {
        Home,
        Navigation,
        Status,
        Message
    }
};
</script>

<style>

</style>
