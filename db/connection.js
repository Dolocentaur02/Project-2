const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb:https://api.estated.com/property/v3?token=hOv1aH7pcGPcv8iEkNr93rAIxPhMF7', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose