
export default {
    mutateCompanyCategory : (state, payload) => {
        state.companyCategory = payload;
    },
    mutateCompany : (state, payload) => {
        state.company = payload;
    },
    mutateCurrentUser : (state, payload) => {
        state.currentUser = payload;
    },
    mutateInLoginPage : (state, payload) => {
        state.inLoginPage = payload;
    },
    mutateIsCompany : (state, payload) => {
        state.isCompany = payload;
    }
}