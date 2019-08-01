const mongoose = require("../connection");
const Schema = mongoose.Schema


const character = new Schema({
    name: String,
    role: String,
    ministryOfMagic: Boolean,
    bloodStatus: String,
    species: String
});

const Character = mongoose.model("character", character);

module.exports = Character;