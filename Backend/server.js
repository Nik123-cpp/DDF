const express = require('express')
const user_route = require("./routes/userroute.js")
const profile_route = require("./routes/profileroute.js")
const allrequest_route = require("./routes/allrequestroute.js")
const pendingrequest_route = require("./routes/pendingrequestroute.js")
const committee_route = require("./routes/committeeroute.js")
const hod_route = require("./routes/hodroute.js")
const faculty_route = require("./routes/facultyroute.js")
const request_route = require("./routes/requestroute.js")

const app = express()
const port = 8000

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// const mongoDB = "mongodb+srv://cs20btech11036:cs20btech11036password@ddf.ba8g2xt.mongodb.net/?retryWrites=true&w=majority";
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

app.use(express.json())


app.use("/users", user_route)
app.use("/profile", profile_route)
app.use("/allrequest", allrequest_route)
app.use("/pendingrequest", pendingrequest_route)
app.use("/committee", committee_route)
app.use("/hod", hod_route)
app.use("/faculty", faculty_route)
app.use("/request",request_route)

app.get("/api", function(req,res) {
    console.log("Got Request")
    res.send("{Hello world}")
})


app.listen(port, () => {
  console.log("Server started on port 8000 ");
});
