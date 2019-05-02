import Home from "../components/Home.vue";
import Status from "../components/Status.vue"
import CompanyAll from '../components/CompanyAll.vue'
import Company from '../components/Company.vue'
import Message from '../components/Message.vue'
import Login from '../components/Login.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Register from '../components/Register.vue'
import Request from '../components/Request.vue'
import AdminHome from '../components/AdminHome.vue'
import AdminReequestAll from '../components/AdminRequest.vue'
import { store } from '../store/store.js'

export const routes = [
    { path: '', component: Home },
    { path: '/status', component: Status, beforeEnter: (to, from, next)=>{
        if (!store.getters['getCurrentUser'].name) {
            next('/login');
        }
        else {
            next();
        }
    }},
    { path: '/all', component: CompanyAll },
    { path: '/company', component: Company },
    { path: '/message', component: Message, beforeEnter: (to, from, next)=>{
        if (!store.getters['getCurrentUser'].name) {
            next('/login');
        }
        else {
            next();
        }
    }},
    {
        path: '/login', component: Login, beforeEnter: (to, from, next) => {
            store.dispatch("commitInLoginPage", true);
            next();
        }
    },
    { path: '/forgotpassword', component: ForgotPassword },
    { path: '/register', component: Register },
    { path: '/admin', component: AdminHome},
    { path: '/admin/request', component: AdminReequestAll},
    { path: '/request', component: Request, beforeEnter: (to, from, next)=>{
        if (!store.getters['getCurrentUser'].name) {
            next('/login');
        }
        else {
            next();
        }
    } }
]