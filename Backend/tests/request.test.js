const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");



mongoose.set("strictQuery", false);

const mongoDB =
"mongodb+srv://cs20btech11018:zwmZG1KTGxxhW4w0@cluster0.6yngap0.mongodb.net/ddf_test?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(mongoDB);
    console.log("Connected with Mongodb");
} catch (error) {
    console.log(error.message);
}
}

connect()

describe("/request/:id", () => {
    let id;
    faculty = {
    "_id": "643a49224caba5c6f475a3ed",
    "username": "suraj",
    "email_address": "cs20btech11050@iith.ac.in",
    "password": "bobby"
    }
    newRequest = {
    "title": "chemistry conference",
    "requestType": "Public",
    "amount": 200000,
    "documents": ["previous_conference_budget.pdf"],
    "description": "For the ongoing connference on snjp",
    "email_address": "cs20btech11050@iith.ac.in"
    }

    beforeAll(async () => {
        // create a request
        await supertest(app).post("/profile/register/suraj/cs20btech11050@iith.ac.in/bobby");
        const res = await supertest(app).post("/faculty/create_request/").send(newRequest);
        id = res._body.message.split(": ")[1];
        console.log(`id ${id}`);
    })
    afterAll(async () => {
        //clean up request
        await supertest(app).delete(`/request/delete/${id}`);
    })
    test("should get request details for a request id", async () => {

        const res = await supertest(app).get(`/request/${id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("title", "chemistry conference");
        expect(res.body).toHaveProperty("requestType", "Public");
        expect(res.body).toHaveProperty("amount", 200000);
        expect(res.body).toHaveProperty("documents", ["previous_conference_budget.pdf"]);
        expect(res.body).toHaveProperty("description", "For the ongoing connference on snjp");
        expect(res.body).toHaveProperty("status", "Requested");
        expect(res.body).toHaveProperty("review", "");
        expect(res.body).toHaveProperty("faculty_name", "suraj");
        expect(res.body).toHaveProperty("email_address", "cs20btech11050@iith.ac.in");

    });
    test("handling non existing id", async () => {
        const res = await supertest(app).get("/request/123456789");
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty("message", "No such request exists");
    });
});