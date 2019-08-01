// const mongoose = require("./connection")

const character = require("./characterData.json");
const house = require('./houseData.json');
const spells = require('./spellsData.json');

const Character = require("../db/models/Character");
const House = require("../db/models/House");
const Spell = require("../db/models/Spell");

// let charhouse = character.map(charhouse =>{
//     // console.log(charhouse.house)
//     return charhouse.house;
// })


let charHouse = []
console.log(charHouse)

house.forEach(house => {
   
    // console.log(house.members)
    charHouse.push(house.members)
    

 })




Character.deleteMany({}).then(x=>Character.create(character));
House.deleteMany({}).then(x=>House.create(house));
Spell.deleteMany({}).then(x=>Spell.create(spells))



