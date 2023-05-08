let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.end('Hello Express')
})

 module.exports = app;
