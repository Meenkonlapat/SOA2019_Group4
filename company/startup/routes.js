
const company = require("../routes/company.js").router;
const error = require("../middleware/error.js");

module.exports = function(app)
{
    app.use("/api/company", request);
}