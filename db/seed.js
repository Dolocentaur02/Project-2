// const mongoose = require("./connection")

const character = require("./characterData.json");
const house = require('./houseData.json');
const spells = require('./spellsData.json');

const Character = require("../db/models/Character");
const House = require("../db/models/House");
const Spell = require("../db/models/Spell");



// Character.deleteMany({}).then(x => Character.create(character));
// House.deleteMany({}).then(x => House.create(house));
// Spell.deleteMany({}).then(x => Spell.create(spells))

Character.deleteMany({})
    .then(x => {
        const characters = character.map(char => {
            var charObject = {
                name: char.name,
                role: char.role,
                ministryOfMagic: char.ministryOfMagic,
                bloodStatus: char.bloodStatus,
                species: char.species
            }
            return charObject
        })

        Character.collection.insert(characters)
            .then(check => {
                console.log(check)
            })
    })

House.deleteMany({})
    .then(x => {
        const houses = house.map(house => {
            var houseObject = {
                name: house.name,
                mascot: house.mascot,
                headOfHouse: house.headOfHouse,
                houseGhost: house.houseGhost,
                founder: house.founder,
                school: house. school,
                values: [house.values],
                colors: [house.values],
            }
            return houseObject
        })

        House.collection.insert(houses)
            .then(check => {
                console.log(check)
            })
    })

    Spell.deleteMany({})
    .then(x => {
        const spells = spells.map(spell => {
            var spellObject = {
                spell: spell.spell,
                type: spell.type,
                effect: spell.effect
            }
            return spellObject
        })

        Spell.collection.insert(spells)
            .then(check => {
                console.log(check)
            })
    })



//find all characters in the model

// Character.find({})
//     .then(allchar => {
//         allchar.forEach(eachChar =>
//             //find each character with the property house
//             House.findOne({ "Character": eachChar.house })
//                 .then(charhouse => {
//                     eachChar.houseref = charhouse._id,
//                     eachChar.save();
//                 }))
//     })


