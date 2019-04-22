const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(urlencodeParser = bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());
app.use(cors());

require('./routes/companyRequest.js');
require('./startup/routes.js')(app);
require('./startup/db.js')();
require("./startup/prod.js")(app);

const port = process.env.PORT || 3002;
app.listen(port, ()=>{
    console.log("connected to port " + port + " :3");
});