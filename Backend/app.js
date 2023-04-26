const express = require('express')
const cors = require('cors')
const user_route = require("./routes/userroute.js")
const profile_route = require("./routes/profileroute.js")
const allrequest_route = require("./routes/allrequestroute.js")
const pendingrequest_route = require("./routes/pendingrequestroute.js")
const committee_route = require("./routes/committeeroute.js")
const hod_route = require("./routes/hodroute.js")
const faculty_route = require("./routes/facultyroute.js")
const request_route = require("./routes/requestroute.js")



const app = express()

app.use(express.json())
app.use(cors())


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

module.exports = app;