const mongoose = require("../connection");

const CharacterSchema = new mongoose.Schema({
    name: String,
    role: String,
    ministryOfMagic: Boolean,
    bloodStatus: String,
    species: String
});

const Character = mongoose.model("Kingdom", CharacterSchema);

module.exports = Character;