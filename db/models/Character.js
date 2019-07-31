const mongoose = require("../connection");

const characterSchema = new mongoose.Schema({
    name: String,
    role: String,
    ministryOfMagic: Boolean,
    bloodStatus: String,
    species: String
});

const Character = mongoose.model("character", characterSchema);

module.exports = Character;