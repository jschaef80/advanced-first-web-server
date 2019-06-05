
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const state = require('./state.js')

app.use(bodyParser.json())
app.get('/users', (req, res) => res.send(state.users))
app.get('/users/1', (req, res) => res.send(state.users[0]))

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))