import Home from "../components/Home.vue";
import Status from "../components/Status.vue"
import CompanyAll from '../components/CompanyAll.vue'
import Company from '../components/Company.vue'
import Message from '../components/Message.vue'

export const routes = [
    {path : '', component: Home},
    {path : '/status', component: Status},
    {path : '/all', component: CompanyAll},
    {path : '/company', component: Company},
    {path : '/message', component: Message}
]