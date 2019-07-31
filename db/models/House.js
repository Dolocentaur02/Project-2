const mongoose = require("../connection");

const houseSchema = new mongoose.Schema({
    spell: String,
        type: String,
        effect: String
});

const House = mongoose.model("House", houseSchema);

module.exports = House