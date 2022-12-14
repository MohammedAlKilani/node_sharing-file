const mongoose = require("mongoose");

const datafile = new mongoose.Schema({
    filename:{
        type: String,
        required: true,   
    },
    path:{
        type: String,
        required: true,
    },

})

module.exports = mongoose.model("data file",datafile)