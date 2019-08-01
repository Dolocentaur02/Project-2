const mongoose = require("../connection");
const Schema = mongoose.Schema

const spell = new Schema({
    spell: String,
        type: String,
        effect: String
});

const Spell = mongoose.model("Spell", spell);

module.exports = Spell;