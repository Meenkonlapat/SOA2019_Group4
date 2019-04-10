const mongoose = require('mongoose')
module.exports = ()=>{
    mongoose.connect('mongodb:localhost/contact', {useNewUrlParser: true})
    .then(() => console.log('Connecting to MongoDB')
    )
}