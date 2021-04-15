const mongoose = require("mongoose")

const schemaStructure = mongoose.Schema(
    {

    country: {
        type: String,
        required: true,
        unique: [true, "This country alreadly exist"],
    },
    name: {
        type: String,
        required: true,
        unique: [true, "This name alreadly exist"],
    },
    rating: {
        type: String,
        required: true,
        unique: [true, "This rating alreadly exist"],
    },
})

module.exports = mongoose.model("monies", schemaStructure)