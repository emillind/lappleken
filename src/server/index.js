const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
let games = {}

app.use(cors())

app.post('/createGame', (req, res) => {
  const id = createId()
  games[id] = {
    notes:[],
    numOfTeams: req.params.numOfTeams
  }
  res.send(id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const createId = () => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charactersLength = characters.length
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result;
}
