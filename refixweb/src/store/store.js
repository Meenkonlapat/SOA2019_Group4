import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import getters from "./getter.js";
import mutations from "./mutation.js";
import actions from "./action.js";

export const store = new Vuex.Store({
    state : {
        companyCategory: "",
        company: null,
        currentUser: {
            name : "",
            ID : "",
            address: ""
        },
        inLoginPage: false,
        isCompany: false,
        request: null
    },
    getters,
    mutations,
    actions,
    plugins:[
        createPersistedState({
            paths: ['companyCategory', 'company', 'currentUser', 'inLoginPage', 'isCompany', 'request']
        })
    ]
});