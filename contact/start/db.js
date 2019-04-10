const mongoose = require('mongoose')
const config = require('config')
module.exports = ()=>{
    const db = config.get("db")
    mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connecting to MongoDB' + config.get("db"))
    )
}