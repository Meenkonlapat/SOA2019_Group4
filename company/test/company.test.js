
const validateCompany = require("../../routes/request.js").validateRequest

describe("validateCompany", () => {
    it("error should not be null when company is invalid", () => {
        expect(validateCompany({companyId: 123}).error).toBeTruthy();
    });

    it("error should be null when company is valid", () => {
        expect(validateCompany(
        { 
            companyId: "000001",
            companyName: "White Company",
            companyDescription: "This Company has good quility",
            companyCategory: "fire"
        }
        ).error).toBeFalsy();
    });
})