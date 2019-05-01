
const validateRequest = require("../../routes/request.js").validateRequest

describe("Unit test : validateRequest", () => {
    it("error should not be null when request is invalid", () => {
        expect(validateRequest({requestId: 123}).error).toBeTruthy();
    });

    it("error should be null when request is valid", () => {
        expect(validateRequest(
        { 
            requestId: '000004',
            customer: {
                id:'000001',
                name:"Somchai",
                address:"123/123 Bangkok"
            },
            company: {
                id:'000001',
                name:'Somboon company',
                address:'09/876 Bangkok'
            },
            category: 'electric',
            status: 'accepted',
            title: 'fix tv',
            description: 'help me',
            bill: []
        }
        ).error).toBeFalsy();
    });
})