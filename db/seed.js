// const mongoose = require("./connection")

const character = require("./characterData.json");
const house = require('./houseData.json');
const spells = require('./spellsData.json');

const Character = require("../db/models/Character");
const House = require("../db/models/House");
const Spell = require("../db/models/Spell");

 //find all characters in the model
Character.find({})
.then(allchar => {
    allchar.forEach(eachChar =>
        House.findOne({"Characters":eachChar.house})
        .then(charhouse=>{
            eachChar.houseref = charhouse._id;
            eachChar.save();
        }))
})

Character.deleteMany({}).then(x=>Character.create(character));
House.deleteMany({}).then(x=>House.create(house));
Spell.deleteMany({}).then(x=>Spell.create(spells))



