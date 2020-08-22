const express = require('express')
const app = express()
const port = 5210
const receive = require('./api/receive')
const send = require('./api/send')

app.get('/receive', receive)
app.delete('/send', send)
app.get('/send', send)

app.listen(port, () => console.log("Listening at http://localhost:5210"))