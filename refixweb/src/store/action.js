
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
    }
}