const mongoose = require("../connection");
const Schema = mongoose.Schema

const house = new Schema({
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    school: String,
    values: [String],
    colors: [String],

    members: [{
        type: Schema.Types.ObjectId,
        ref: "Character"
    }]

});

const House = mongoose.model("House", house);

module.exports = House