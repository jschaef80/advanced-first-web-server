
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const state = require('./state.js')

app.use(bodyParser.json())
app.get('/users', (req, res) => res.send(state.users))
app.get('/users/1', (req, res) => res.send(state.users[0]))
app.post('/users', (req, res) => {
  state.users.push({
    "_id": 6,
    "name": "Ron Burgundy",
    "occupation": "News Anchor Extraordinaire",
  })
  res.json(state.users[state.users.length-1])
})
app.put('/users/1', (req, res) => /* you left off here. change any key value of first object in array then return this data back to the client */)

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))