const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = Schema({
    faculty: { type: Schema.Types.ObjectId, ref:"Profile", required: true },
    title: { type: String, required: true },
    requestType: {
        type: String,
        required: true,
        enum: ["Personal", "Public"],
        default: "Personal"
    },
    amount: { type: Number, required: true },
    documents: [{ type: String }],
    description: { type: String, required: true },
    review: { type: String },
    status: {
        type: String,
        required: true,
        enum: ["Requested", "Verified", "Approved"],
        default: "Requested"
    },
    created : { type: Date, default: Date.now }
})
module.exports = mongoose.model("Request", requestSchema);