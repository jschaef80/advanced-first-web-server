
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const state = require('./state.js')

app.use(bodyParser.json())
app.get('/', (req, res) => res.send())
app.get('/users', (req, res) => res.send(state.users))
// app.get('/users/:userID', (req, res) => res.send(state.users[0]))
// app.post('/users', (req, res) => {
//   state.users.push({
//     "_id": 6,
//     "name": "Ron Burgundy",
//     "occupation": "News Anchor Extraordinaire",
//   })
//   res.json(state.users[state.users.length-1])
// })
// app.put('/users/1', (req, res) => {
//   state.users[0].name =  "Carl Cooper";
//   res.json(state.users[0]);
// })

// app.delete('/users/1', (req, res) => {
//   state.users.splice(0, 1);
//   res.send("deleted")
// })

app.post('/users', (req, res) => {
  const counter = state.users.length+1;
  state.users.push({});
  const newObject = state.users.length-1;
  state.users[newObject]._id = counter;
  state.users[newObject].name = req.body.name;
  state.users[newObject].occupation = req.body.occupation;
  res.json(state.users[newObject]);
})

app.get('/users/:userID', (req, res) => {
  const user = req.params.userID-1;
  res.send(state.users[user])}
  )

app.put('/users/:userID', (req, res) => {
  const newValue = req.params.userID-1;
  state.users[newValue].occupation = 'barista';
  res.json(state.users[newValue])
})

app.delete('/users/:userID', (req, res) => {
  const deleteValue = req.params.userID-1;
  state.users.splice(deleteValue, 1)
  res.send(state.users)
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))