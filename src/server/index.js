const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
let games = {}

app.use(cors())
app.use(express.json())

app.put('/game', (req, res) => {
  const { name, noOfTeams, noOfNotes } = req.body
  const id = createId()
  if (!name || !noOfTeams || !noOfNotes) {
    res.status(400).send('Please supply name, noOfTeams and noOfNotes')
  }
  games[id] = {
    id: id,
    name,
    noOfNotes,
    noOfTeams,
    notes: [],
  }
  res.send(id)
})

app.get('/game/:id', (req, res) => {
  const id = req.params.id
  const game = games[id]
  if (game) res.send(game)
  res.status(404).send('Could not find game with id ' + id)
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
  if (Object.keys(games).includes(result)) return createId()
  return result
}
