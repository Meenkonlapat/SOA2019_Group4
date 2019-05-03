
const validateCompany = require("../routes/companyRequest.js").validateCompany

describe("Unit test : validateCompany", () => {
    it("error should not be null when company is invalid", () => {
        expect(validateCompany({companyId: 123}).error).toBeTruthy();
    });

    it("error should be null when company is valid", () => {
        expect(validateCompany(
        { 
            companyId: "000001",
            companyName: "White Company",
            companyDescription: "This Company has good quility",
            companyCategory: "fire",
            companyAddress: "111/111 Bangkok",
            companyLogo: "link here...",
            companyPictures: ["picture1 link", "picture2 link"]
        }
        ).error).toBeFalsy();
    });
})