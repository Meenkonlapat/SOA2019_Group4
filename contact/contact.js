const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(urlencodeParser = bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());
app.use(cors());

require('./router/contactRequest.js');
require('./start/router.js')(app);
require('./start/db.js')();
require("./start/eureka.js")();
require("./start/prod.js")(app);

const port = process.env.PORT || 3003;
const server = app.listen(port, () => 
    {
        console.log(`Connecting to port ${port}...`)
    });

require('./chat/chat.js')(server);

module.exports = server;
