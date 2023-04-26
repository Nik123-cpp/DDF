const mongoose = require('mongoose')

const ddfschema = new mongoose.Schema({
    name : { type : String , require:true },
    balance : { type : Number , required : true }
})

module.exports = mongoose.model("ddfbalance",ddfschema);

