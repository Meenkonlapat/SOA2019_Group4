
const mongoose = require("mongoose");
const contact = require("supertest");
const {Contact} = require("../../router/contactRequest.js");

let server;

describe("API test : /api/contact", () => {
    beforeEach(() => {
        server = require("../../contact.js");
    });
    afterEach(async () => {
        server.close();
        await Contact.deleteMany({});
    });

    describe("GET /", () => {
        it("should return all contact", async() => {
            await Contact.collection.insertMany([
            {
                companyId: "000001",
                customerId: "000001",
                chat: []
            },
            {
                companyId: "000002",
                customerId: "000002",
                chat: [{
                    sender: "Somchai",
                    message: "hello i need help",
                }]
            }
            ])

            const res = await contact(server).get("/api/contact");
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(data => data.companyId === "000001"));
            expect(res.body.some(data => data.companyId === "000002"));
        });
    });
}
)