
const request = require('../routes/request.js').router;
const error = require("../middleware/error.js");

module.exports = function(app)
{
    app.use("/api/request", request);
}