<template>
    <div>
        <Navigation/>

        <router-view></router-view>
    </div>
</template>

<script>
import Home from "./components/Home.vue";
import Navigation from "./components/navigation.vue";

export default {
    components : {
        Home,
        Navigation,
    }
};
</script>
<style>

</style>
