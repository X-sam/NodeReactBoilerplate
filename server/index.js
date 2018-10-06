const express = require('express');

const app = express();

let port = 8080;

app.use(express.static('./public'));


app.listen(port, () => console.log('Example listening on port '+port));
