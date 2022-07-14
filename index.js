const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('greetings humans')
})

app.listen(3000)