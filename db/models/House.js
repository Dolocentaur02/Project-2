const mongoose = require("../connection");

const houseSchema = new mongoose.Schema({
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    school: String,
    
    values: [String],
    colors: [String]
});

const House = mongoose.model("House", houseSchema);

module.exports = House