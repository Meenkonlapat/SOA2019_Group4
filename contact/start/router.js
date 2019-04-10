const contactRequest = require('../router/contactRequest.js')
const error = require('../middleware/error.js')

module.exports = (app) =>{
    app.use('api/contact', contactRequest)
}