import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import getters from "./getter.js";
import mutations from "./mutation.js";
import actions from "./action.js";

export const store = new Vuex.Store({
    state : {
        companyCategory: "",
        company: null
    },
    getters,
    mutations,
    actions
});