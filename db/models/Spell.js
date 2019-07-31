const mongoose = require("../connection");

const spellSchema = new mongoose.Schema({
    spell: String,
        type: String,
        effect: String
});

const Spell = mongoose.model("spells", spellSchema);

module.exports = Spell;