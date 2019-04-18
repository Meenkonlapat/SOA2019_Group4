import Home from "../components/Home.vue";
import Status from "../components/Status.vue"

export const routes = [
    {path : '', component: Home},
    {path : '/status', component: Status}
]