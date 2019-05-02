
const mongoose = require("mongoose");
const request = require("supertest");
const {Request} = require("../../routes/request.js");

let server;

describe("API test : /api/request", () => {
    beforeEach(() => {
        server = require("../../index.js");
    });
    afterEach(async () => {
        server.close();
        await Request.deleteMany({});
    });

    describe("GET /", () => {
        it("should return all request", async() => {
            await Request.collection.insertMany([
            {
                requestId: '000001',
                customer: {
                    id:'000001',
                    name:"Somchai",
                    address:"123/456 Bangkok"
                },
                company: {
                    id:'000001',
                    name:'Somboon company',
                    address:'09/876 Bangkok'
                },
                status: 'accepted',
                title: 'fix tv',
                description: 'help me',
                bill: []
            },
            {
                requestId: '000002',
                customer: {
                    id:'000001',
                    name:"Somchai",
                    address:"123/456 Bangkok"
                },
                company: {
                    id:'000001',
                    name:'Somboon company',
                    address:'09/876 Bangkok'
                },
                status: 'accepted',
                title: 'fix toilet',
                description: 'help me',
                bill: []
            }
            ])

            const res = await request(server).get("/api/request");
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(data => data.requestId === "000001"));
            expect(res.body.some(data => data.requestId === "000002"));
        });
    });

    describe("GET /:id", () => {
        it("should return request with given id",async () => {
            const data = new Request({
                requestId: '000004',
                customer: {
                    id:'000001',
                    name:"Somchai",
                    address:"123/456 Bangkok"
                },
                company: {
                    id:'000001',
                    name:'Somboon company',
                    address:'09/876 Bangkok'
                },
                status: 'accepted',
                title: 'fix tv',
                description: 'help me',
                bill: []
            });
            await data.save();
            const res = await request(server).get("/api/request/" + data._id);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("requestId", data.requestId);
        });

        it("should return 404 when given invalid id",async () => {
            const res = await request(server).get("/api/request/123");

            expect(res.status).toBe(404);
        });

        it("should return 404 when no request with given id exists",async () => {
            const id = mongoose.Types.ObjectId();
            const res = await request(server).get("/api/request/" + id);

            expect(res.status).toBe(404);
        });
    });

    describe("DELETE /:id", () => {
        it("should delete and return request with given id", async () => {
            const data = new Request({
                requestId: '000004',
                customer: {
                    id:'000001',
                    name:"Somchai",
                    address:"123/456 Bangkok"
                },
                company: {
                    id:'000001',
                    name:'Somboon company',
                    address:'09/876 Bangkok'
                },
                status: 'accepted',
                title: 'fix tv',
                description: 'help me',
                bill: []
            });
            await data.save();
            const res = await request(server).delete("/api/request/" + data._id);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("requestId", data.requestId);
        });

        it("should return 404 when given invalid id", async () => {
            const res = await request(server).delete("/api/request/1234");

            expect(res.status).toBe(404);
        });

        it("should return 404 when no request with given id exists", async () => {
            const id = mongoose.Types.ObjectId();
            const res = await request(server).delete("/api/request/" + id);

            expect(res.status).toBe(404);
        });
    });

    describe("PUT /:id/status", () => {
        it("should return updated document", async() => {
            const data = new Request({
                requestId: '000004',
                customer: {
                    id:'000001',
                    name:"Somchai",
                    address:"123/456 Bangkok"
                },
                company: {
                    id:'000001',
                    name:'Somboon company',
                    address:'09/876 Bangkok'
                },
                status: 'accepted',
                title: 'fix tv',
                description: 'help me',
                bill: []
            });
            await data.save();
            const res = await request(server).put("/api/request/" + data._id+"/status").send({status: "rejected"});

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("status", "rejected");
        });

        it("should return 404 when given invalid id", async() => {
            const res = await request(server).delete("/api/request/1234").send({status: "rejected"});

            expect(res.status).toBe(404);
        });

        it("should return 404 when no request with given invalid exists", async() => {
            const id = mongoose.Types.ObjectId();
            const res = await request(server).delete(("/api/request/") + id).send({status: "rejected"});

            expect(res.status).toBe(404);
        })
    });
}
)