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


describe("/faculty/create_request", () => {

    let id;
    beforeAll(async () => {
        connect();
    });
    afterAll(async () => {
        await supertest(app).delete(`/faculty/delete_request/${id}`).then(mongoose.connection.close());
    });
    test("should create a request", async () => {
        const newRequest = {
            "title": "chemistry conference",
            "requestType": "Public",
            "amount": 200000,
            "documents": ["previous_conference_budget.pdf"],
            "description": "For the ongoing connference on snjp",
            "email_address": "cs20btech11050@iith.ac.in"
        }
        const res = await supertest(app).post("/faculty/create_request/").send(newRequest);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message");
        if(res.body.message){
            expect(res.body.message).toMatch(/Request Succesfully Created with ID : (.*)/);
            id = RegExp.$0;
        }
    });
    test("when email id is not valid should not create a request", async () => {
        const newRequest = {
            "title": "chemistry conference",
            "requestType": "Public",
            "amount": 200000,
            "documents": ["previous_conference_budget.pdf"],
            "description": "For the ongoing connference on snjp",
            "email_address": "cs20btech11042@iith.ac.in"
        }
        const res = await supertest(app).post("/faculty/create_request/").send(newRequest);
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty("message", "No user with that email id exists");
    });
});

