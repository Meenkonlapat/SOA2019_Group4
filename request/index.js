
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const winston = require("winston");

app.use(urlencodeParser = bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());

require("./startup/logging.js")();
require("./startup/db.js")();
require("./startup/routes.js")(app);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("connected to port " + port + " :3");
});