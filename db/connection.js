const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost/potter";

mongoose.connect(mongoURI, { useNewUrlParser: true })

module.exports = mongoose;
