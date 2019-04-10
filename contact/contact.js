const express = require('express')
const app = express();

require('./start/router')()
require('./start/')
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Connecting to port ${port}...`));
