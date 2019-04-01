
const validateRequest = require("../../routes/request.js").validateRequest

describe("validateRequest", () => {
    it("error should not be null when request is invalid", () => {
        expect(validateRequest({requestId: 123}).error).toBeTruthy();
    });

    it("error should be null when request is valid", () => {
        expect(validateRequest(
        { 
            requestId: '000004',
            customerId: '000001',
            companyId: '000001',
            category: 'electric',
            status: 'accepted',
            description: 'help me4'
        }
        ).error).toBeFalsy();
    });
})