const mongoose = require("mongoose")

module.exports = function() {
    mongoose.connect("mongodb://localhost/bill", { useNewUrlParser: true })
    .then(() => console.log("connected to mongoDB"))
}