const express = require('express')
const user_route = require("./routes/userroute.js")

const app = express()
const port = 8000

const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://cs20btech11036:cs20btech11036password@ddf.ba8g2xt.mongodb.net/?retryWrites=true&w=majority";
// const mongoDB2 = "mongodb+srv://cs20btech11018:zwmZG1KTGxxhW4w0@cluster0.6yngap0.mongodb.net/?retryWrites=true&w=majority";


async function connect(){
    try{
        await mongoose.connect(mongoDB);
        console.log("Connected with Mongodb")
    } catch(error) {
        console.log(error.message)
    }
}

connect()

app.use(express.json())


app.use("/users", user_route)

app.get("/api", function(req,res) {
    console.log("Got Request")
    res.send("{Hello world}")
})


app.listen(port,() => {console.log("Server started on port 8000 ")})


