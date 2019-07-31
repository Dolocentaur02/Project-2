const axios = require('axios')

const url = "https://restcountries.eu/rest/v2/all"
let json
axios.get(url)
  .then(response => { json = response.data })
  .then(x=>console.log(json))
  .catch(error => { return error })


//   https://debug.anapi.io/https://debug.anapi.io/https://debug.anapi.io/