let express = require('express');
let path = require('path');
let stylus = require('stylus');

let app = express();
let asseticDir = process.argv[3] || path.join(__dirname, 'public');

app.use(stylus.middleware(asseticDir));
app.use(express.static(asseticDir));

app.listen(process.argv[2] || 3000);
