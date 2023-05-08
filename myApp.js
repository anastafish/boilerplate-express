let express = require('express');
let app = express();
const env = require('dotenv').config()

const absolutePath = __dirname + '/views/index.html'
const styles = __dirname + "/public"

app.get('/', (req, res) => {
    res.sendFile(absolutePath)    
})

app.get('/json', (req, res) => {
    const wordCase = process.env.MESSAGE_STYLE
    if (wordCase === 'uppercase'){
    res.json({"message": "HELLO JSON"})
    }
    else {
        res.json({"message": "Hello json"})   
    }
})

app.use('/public', express.static(styles));



 module.exports = app;
