const axios = require('axios');
const fs = require('fs');
axios
.get(
'https://www.potterapi.com/v1/spells/?key=$2a$10$Kj0uDkBEa9Y7VP9nlaaLSu30L5SyJ4ihNa/ffg6DBOXPFI7FgH.5m'
)
.then(response => {

console.log(response.data);
let stringified = JSON.stringify(response.data);
console.log(stringified);
fs.writeFile('./spellsData.json', stringified, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("successfully wrote records to db/spellsData.json");
  }
});
});