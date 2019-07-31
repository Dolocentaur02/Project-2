// const axios = require('axios')
// const fs = require('fs');

// const url =  "https://data.wa.gov/api/views/mve5-ycx7/rows.json?accessType=DOWNLOAD"
// axios.get(url)
//   .then(response => { json = response.data })
//   .then(x=>console.log(json))

//   let stringified = JSON.stringify(response.data);
//   console.log(stringified);
//   fs.writeFile('./seeddata.json', stringified, err => {
//    if (err) {
//      console.error(err);
//    } else {
//      console.log("successfully wrote records to db/seeddata.json");
//    }
//   });

const axios = require('axios');
const fs = require('fs');
axios
.get(
'https://data.wa.gov/api/views/mve5-ycx7/rows.json?'
)
.then(response => {

console.log(response.data);
let stringified = JSON.stringify(response.data);
console.log(stringified);
fs.writeFile('./seedData.json', stringified, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("successfully wrote records to db/seedData.json");
  }
});
});

