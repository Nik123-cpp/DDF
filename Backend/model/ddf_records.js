const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ddfSchema = new mongoose.Schema({
    source: {
        type: String,
        required: function() {
            return !this.request
        },
        default:"NA"
    },
    request: {
        type: Schema.Types.ObjectId,
        ref: "Request",
        required: function() {
            return !this.source
        }
    },
    created :   { type: Date, default: Date.now },
    transaction_type: {
        type: String,
        required: true,
        enum: ["Credit", "Debit"],
        default: "Debit"
    },
    amount: { type: Number, required: true },
    balance : { type : Number , required : true }
})

module.exports = mongoose.model("DDF_record",ddfSchema);