const Character = require("../db/models/Character");
const House = require("../db/models/House");
// const character = require("./characterData.json");
// const house = require('./houseData.json');
// House.find({}).then(houses => {
//    houses.forEach(char => {
//        Character.findOneAndUpdate({name: char.name}, {$set: {house: char._id}}, {new:true}).then(updated => {
//         //    console.log(char)
//            console.log(houses)
//            console.log(updated)
//        })
//    })
// })

Character.find({}).then(characters => {
    characters.forEach(houses => {
        House.findOneAndUpdate({name: houses.name}, {$set: {house: houses._id}}, {new:true}).then(updated => {
            console.log(houses)
            // console.log(houses)
            // console.log(updated)
        })
    })
 })