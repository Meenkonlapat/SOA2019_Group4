
export default {
    commitCompanyCategory : ({commit}, payload) => {
        commit('mutateCompanyCategory', payload);
    },
    commitCompany : ({commit}, payload) => {
        commit('mutateCompany', payload);
    },
    commitCurrentUser : ({commit}, payload) => {
        commit('mutateCurrentUser', payload);
    },
    commitInLoginPage : ({commit}, payload) => {
        commit('mutateInLoginPage', payload);
    },
    commitIsCompany : ({commit}, payload) => {
        commit('mutateIsCompany', payload);
    },
    commitRequest : ({commit}, payload) => {
        commit('mutateRequest', payload);
    }
}