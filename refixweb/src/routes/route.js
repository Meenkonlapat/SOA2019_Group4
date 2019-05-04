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
import addExtensionBill from '../components/AddExtensionBill.vue'
import { store } from '../store/store.js'

export const routes = [
    { path: '', component: Home , beforeEnter: (to, from, next)=>{
        if (!store.getters["getIsCompany"])// if user is not company user go normally
        {
            next();
        }
        else{// if user is company go to admin page
            next('/admin');
        }
    }},
    { path: '/status', component: Status, beforeEnter: (to, from, next)=>{
        if (!store.getters['getCurrentUser'].name) {// if not logged in go to login
            next('/login');
        }
        else if (!store.getters["getIsCompany"])// if user is not company user go normally
        {
            next();
        }
        else {// if user is company go to admin page
            next('/admin');
        }
    }},
    { path: '/all', component: CompanyAll, beforeEnter: (to, from, next)=>{
        if (!store.getters["getIsCompany"])
        {
            next();
        }
        else{
            next('/admin');
        }
    } },
    { path: '/company', component: Company , beforeEnter: (to, from, next)=>{
        if (!store.getters["getIsCompany"])
        {
            next();
        }
        else{
            next('/admin');
        }
    }},
    { path: '/messenger', component: Message, beforeEnter: (to, from, next)=>{
        if (!store.getters['getCurrentUser'].name) {
            next('/login');
        }
        else if (!store.getters["getIsCompany"])
        {
            next();
        }
        else {
            next('/admin');
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
    { path: '/admin', component: AdminHome, beforeEnter: (to, from, next)=>{
        if (!store.getters["getIsCompany"]){// if user is not company go to home
            next('/');
        }
        else{// if user is company go normally
            next();
        }
    }},
    { path: '/admin/request', component: AdminReequestAll, beforeEnter: (to, from, next)=>{
        if (!store.getters["getIsCompany"]){
            next('/');
        }
        else{
            next();
        }
    }},
    { path: '/admin/addDetail', component: addExtensionBill, beforeEnter: (to, from, next)=>{
        if (!store.getters["getIsCompany"]){
            next('/');
        }
        else{
            next();
        }
    }},
    { path: '/request', component: Request, beforeEnter: (to, from, next)=>{
        if (!store.getters['getCurrentUser'].name) {
            next('/login');
        }
        else if (!store.getters["getIsCompany"])
        {
            next();
        }
        else {
            next('/admin');
        }
    } }
]