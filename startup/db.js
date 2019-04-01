
const mongoose = require("mongoose")

module.exports = function() {
    mongoose.connect("mongodb://localhost/request", { useNewUrlParser: true })
    .then(() => console.log("connected to mongoDB"))
}