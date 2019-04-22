import Home from "../components/Home.vue";
import Status from "../components/Status.vue"
import CompanyAll from '../components/CompanyAll.vue'
import Company from '../components/Company.vue'
import Message from '../components/Message.vue'
import Login from '../components/Login.vue'
import ForgotPassword from '../components/ForgotPassword.vue'

export const routes = [
    {path : '', component: Home},
    {path : '/status', component: Status},
    {path : '/all', component: CompanyAll},
    {path : '/company', component: Company},
    {path : '/message', component: Message},
    {path : '/login', component: Login},
    {path : '/forgotpassword', component: ForgotPassword}
]