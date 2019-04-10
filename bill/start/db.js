const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
    const db = config.get("db");
    mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("connected to mongoDB : " + config.get("db")))
}