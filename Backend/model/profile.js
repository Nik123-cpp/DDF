const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email_address: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model("Profile", userSchema);