const express = require("express");
const parser = require("body-parser")
const app = express();

app.use(parser.json())

app.use("/character", require("../routes/character"))
app.use("/house", require("../routes/house"))
app.use("/spell", require("../routes/spell"))

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});