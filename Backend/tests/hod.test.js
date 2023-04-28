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

describe("/hod/approve/:request_id", () => {
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
        const Review = { review: "okay verified" };
        const res2 = await supertest(app).put(`/committee/verify/${id}`).send(Review);
        console.log(res2.body);
    });
    afterAll(async () => {
        await supertest(app).delete(`/request/delete/${id}`);
        await mongoose.connection.close();
    });
    test("should approve the request", async () => {
        const res = await supertest(app).put(`/hod/approve/${id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "Request Successfully Approved");

        const res2 = await supertest(app).get(`/request/${id}`);
        expect(res2.body).toHaveProperty("status", "Approved");
    });
    test("should not approve the request", async () => {
        const res = await supertest(app).put(`/hod/approve/1234`);
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty("message", "No such request is verified by committee");
    });
});


