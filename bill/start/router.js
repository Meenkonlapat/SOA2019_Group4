const billRequest = require("../router/billRequest.js").router;
const error = require("../middleware/error.js");

module.exports = function(app)
{
    app.use("/api/bill", billRequest);
}