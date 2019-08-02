
const character = require("./characterData.json");
const house = require('./houseData.json');


const Character = require("../db/models/Character");
const House = require("../db/models/House");




//find all the data within the character model
Character.find({})
.then(allchar => {
    allchar.forEach(eachcharacter =>
        House.findOne({name:eachcharacter.house})
        .then(charhouse=>{
            eachcharacter.house = charhouse._id;
            eachcharacter.save();
        }))
})