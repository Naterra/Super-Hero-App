const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    id: { type: Number , index: { unique: true }},
    name: { type: String },
    url: { type: String },
});


module.exports =  mongoose.model("Character", CharacterSchema);