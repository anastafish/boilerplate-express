let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html'
const styles = __dirname + "/public"
const json_data = {"message":"Hello json"}

app.get('/', (req, res) => {
    res.sendFile(absolutePath)    
})

app.get('/json', (req, res) => {
    res.json(json_data)
})

app.use('/public', express.static(styles));



 module.exports = app;
