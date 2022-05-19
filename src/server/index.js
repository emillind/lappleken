
const express = require('express')
const app = express()
const port = 3001
let games = {}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createGame', (req, res) => {
  
  res.send('Game created')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
