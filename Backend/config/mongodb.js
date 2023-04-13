const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDB = "mongodb+srv://cs20btech11036:cs20btech11036password@ddf.ba8g2xt.mongodb.net/?retryWrites=true&w=majority";


const connection = mongoose.connect(mongoDB);

module.exports = connection