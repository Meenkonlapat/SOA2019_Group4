
const company = require('./routes/companyRequest.js');.router;
const error = require("../middleware/error.js");

module.exports = function(app)
{
    app.use("/api/company", company);
}