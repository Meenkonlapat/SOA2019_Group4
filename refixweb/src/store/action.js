
export default {
    commitCompanyCategory : ({commit}, payload) => {
        commit('mutateCompanyCategory', payload);
    },
    commitCompany : ({commit}, payload) => {
        commit('mutateCompany', payload);
    }
}