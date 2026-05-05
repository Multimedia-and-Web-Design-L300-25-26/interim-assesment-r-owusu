const mongoose = require("mongoose")
const cryptoSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    unique: true
},
symbol: {
    type: String, 
    required: true,
    unique: true
},
price: {
    type: Number,
    required: true
},
image:{
    type: String
},
change: {
    type: Number,
    required: true
},

}, {timestamps: true})
const Crypto = mongoose.model("Crypto", cryptoSchema)
module.exports = Crypto