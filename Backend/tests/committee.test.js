const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");



mongoose.set("strictQuery", false);

const mongoDB =
"mongodb+srv://cs20btech11018:zwmZG1KTGxxhW4w0@cluster0.6yngap0.mongodb.net/ddf_test?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(mongoDB);
    } catch (error) {
        console.log(error.message);
    }
}

describe("/committee/verify/:request_id", () => {
    let id;
    beforeAll(async () => {
        connect();
        const newRequest = {
            "title": "chemistry conference",
            "requestType": "Public",
            "amount": 200000,
            "documents": ["previous_conference_budget.pdf"],
            "description": "For the ongoing connference on snjp",
            "email_address": "cs20btech11050@iith.ac.in"
        }
        const res = await supertest(app).post("/faculty/create_request/").send(newRequest);
        res.body.message.match(/Request Successfully Created with ID : (.*)/);
        id = RegExp.$1;
    });
    afterAll(async () => {
        await supertest(app).delete(`/request/delete/${id}`);
        await mongoose.connection.close();
    });
    test("should verify a request", async () => {
        const Review = { review: "okay approved" };
        const res = await supertest(app).put(`/committee/verify/${id}`).send(Review);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "Request Successfully Verified");

        const res2 = await supertest(app).get(`/request/${id}`);
        expect(res2.body).toHaveProperty("status", "Verified");
        expect(res2.body).toHaveProperty("review", Review.review);
    });
    
    test("should not verify a request", async () => {
        const Review = { review: "okay approved" };
        const res = await supertest(app).put(`/committee/verify/1234`).send(Review);
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty("message", "No such request is Requested by any faculty");
    });
});

describe("/committee/deny/:request_id", () => {
    let id;
    beforeAll(async () => {
        await connect();
        const newRequest = {
            "title": "chemistry conference",
            "requestType": "Public",
            "amount": 200000,
            "documents": ["previous_conference_budget.pdf"],
            "description": "For the ongoing connference on snjp",
            "email_address": "cs20btech11050@iith.ac.in"
        }
        const res = await supertest(app).post("/faculty/create_request/").send(newRequest);
        id = res.body.message.split(": ")[1];
    });
    afterAll(async () => {
        await supertest(app).delete(`/request/delete/${id}`);
        await mongoose.connection.close();
    });
    test("should deny a request", async () => {
        const Review = { review: "sorry, I cannot approve this request" };
        const res = await supertest(app).put(`/committee/deny/${id}`).send(Review);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "Request Successfully Denied");

        const res2 = await supertest(app).get(`/request/${id}`);
        expect(res2.body).toHaveProperty("status", "Denied");
        expect(res2.body).toHaveProperty("review", Review.review);
    });

    test("should not deny a request", async () => {
        const Review = { review: "sorry, I cannot approve this request" };
        const res = await supertest(app).put(`/committee/deny/1234`).send(Review);
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty("message", "No such request is Requested by any faculty");
    });
        
});
