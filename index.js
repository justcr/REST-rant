require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('greetings humans')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>wrong way homie</h1>')
})

app.listen(process.env.PORT)