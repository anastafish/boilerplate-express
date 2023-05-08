let express = require('express');
let app = express();
const env = require('dotenv').config()

const absolutePath = __dirname + '/views/index.html'
const styles = __dirname + "/public"

app.use((req, res, next) => {
    const method = req.method
    const path = req.path
    const ip = req.ip
    console.log(`${method} ${path} - ${ip}`)
    next()
})

app.get('/', (req, res) => {
    res.sendFile(absolutePath)    
})

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({"message": "HELLO JSON"})
    }
    else {
        res.json({"message": "Hello json"})   
    }
})


app.use('/public', express.static(styles));



 module.exports = app;
