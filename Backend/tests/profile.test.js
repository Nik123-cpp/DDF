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

connect()

describe("/profile/:email_id", () => {
    test("should get user details of suraj", async () => {
        const res = await request(app).get("/profile/cs20btech11050@iith.ac.in");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("User");
    });
});

describe("/profile/register/:username/:email_address/:password", () => {
    test("should register a user", async () => {
        const res = await request(app).post("/profile/register/jeev/fakeemail@iith.ac.in/123456");
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty("error","user already exists");
    });
});