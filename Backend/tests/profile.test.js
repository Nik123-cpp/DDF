const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app.js");



mongoose.set("strictQuery", false);

const mongoDB =
"mongodb+srv://cs20btech11018:zwmZG1KTGxxhW4w0@cluster0.6yngap0.mongodb.net/ddf?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(mongoDB);
    console.log("Connected with Mongodb");
} catch (error) {
    console.log(error.message);
}
}


describe("/profile/:email_id", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should get user details of suraj", async () => {
        const res = await request(app).get("/profile/cs20btech11050@iith.ac.in");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("User");
    });
});

describe("/profile/register/", () => {
    beforeAll(async () => {
        await connect()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });
    test("should register a user", async () => {
        newUser = {
            username: "suraj",
            email_address: "cs20btech11050@iith.ac.in",
            password: "bobby"
        }
        const res = await request(app).post("/profile/register/").send(newUser);
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty("message","user already exists");
    });
});
