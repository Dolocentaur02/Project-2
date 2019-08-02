const express = require("express");
const parser = require("body-parser")
const app = express();

app.use(parser.json())

app.use("/character", require("../routes/character"))
app.use("/house", require("../routes/house"))
app.use("/spell", require("../routes/spell"))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

