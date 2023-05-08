let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html'
const styles = __dirname + "/public"

app.get('/', (req, res) => {
    res.sendFile(absolutePath)    
})

app.use('/public', express.static(styles));



 module.exports = app;
