const app = require("./app.js")
const port = 8000;

const mongoose = require("mongoose");
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

app.listen(port, () => {
  console.log("Server started on port 8000 ");
});
