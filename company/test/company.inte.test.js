const mongoose = require("mongoose");
const company = require("supertest");
const {Company} = require("../routes/companyRequest.js");

let server;

describe("API test : /api/company", () => {
    beforeEach(() => {
        server = require("../company.js");
    });
    afterEach(async () => {
        server.close();
        await Company.deleteMany({});
    });

    describe("GET /", () => {
        it("should return all request", async() => {
            await Company.collection.insertMany([
            {
                companyId: "000001",
                companyName: "White Company",
                companyDescription: "This Company has good quility",
                companyCategory: "appliance",
                companyAddress: "111/111 Bangkok"
            },
            {
                companyId: "000002",
                companyName: "Black Company",
                companyDescription: "This Company has many Diversity ",
                companyCategory: "electric",
                companyAddress: "222/222 Bangkok"
            }
            ])

            const res = await company(server).get("/api/company");
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(data => data.companyId === "000001"));
            expect(res.body.some(data => data.companyId === "000002"));
        });
    });

    describe("GET /:id", () => {
        it("should return company with given id",async () => {
            const data = new Company({
                companyId: "000001",
                companyName: "White Company",
                companyDescription: "This Company almost good quility",
                companyCategory: "appliance",
                companyAddress: "111/111 Bangkok"
            });
            await data.save();
            const res = await company(server).get("/api/company/" + data._id);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("companyId", data.companyId);
        });

        it("should return 404 when given invalid id",async () => {
            const res = await company(server).get("/api/company/123");

            expect(res.status).toBe(404);
        });

        it("should return 404 when no company with given id exists",async () => {
            const id = mongoose.Types.ObjectId();
            const res = await company(server).get("/api/company/" + id);

            expect(res.status).toBe(404);
        });
    });

    describe("DELETE /:id", () => {
        it("should delete and return company with given id", async () => {
            const data = new Company({
                companyId: "000001",
                companyName: "White Company",
                companyDescription: "This Company almost good quility",
                companyCategory: "appliance",
                companyAddress: "111/111 Bangkok"
            });
            await data.save();
            const res = await company(server).delete("/api/company/" + data._id);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("companyId", data.companyId);
        });

        it("should return 404 when given invalid id", async () => {
            const res = await company(server).delete("/api/company/1234");

            expect(res.status).toBe(404);
        });

        it("should return 404 when no company with given id exists", async () => {
            const id = mongoose.Types.ObjectId();
            const res = await company(server).delete("/api/company/" + id);

            expect(res.status).toBe(404);
        });
    });

    describe("PUT /:id", () => {
        it("should return updated document", async() => {
            const data = new Company({
                companyId: "000001",
                companyName: "White Company",
                companyDescription: "This Company almost good quility",
                companyCategory: "appliance",
                companyAddress: "111/111 Bangkok"
            });
            await data.save();
            const res = await company(server).put("/api/company/" + data._id).send({companyName: "black company"});

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("companyName", "black company");
        });

        it("should return 404 when given invalid id", async() => {
            const res = await company(server).delete("/api/company/1234").send({status: "rejected"});

            expect(res.status).toBe(404);
        });

        it("should return 404 when no company with given invalid exists", async() => {
            const id = mongoose.Types.ObjectId();
            const res = await company(server).delete(("/api/company/") + id).send({status: "rejected"});

            expect(res.status).toBe(404);
        })
    });
}
)