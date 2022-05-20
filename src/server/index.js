const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
let games = {
  123: {
    notes: ['one', 'two', 'three'],
    id: '123',
    teams: ['Team 1', 'Team 2', 'Team 3'],
    noOfNotes: 2,
    name: 'Test game',
  },
}

app.use(cors())
app.use(express.json())

app.put('/game', (req, res) => {
  const { name, teams, noOfNotes } = req.body
  const id = createId()
  if (!name || !teams || !noOfNotes) {
    res.status(400).send('Please supply name, teams and noOfNotes')
  }
  games[id] = {
    id: id,
    name,
    noOfNotes,
    teams,
    notes: [],
  }
  res.send(id)
})

app.post('/addNotes', (req, res) => {
  const gameId = req.body.gameId
  const notes = req.body.notes
  if (!games[gameId]) {
    res.status(400).send('Could not find game id')
  }
  if (!notes || notes.length === 0) {
    res.status(400).send('No notes provided')
  }
  notes.forEach((note) => {
    games[gameId].notes.push(note)
  })
  res.send('Notes added successfully')
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
  if (games[result]) return createId()
  return result
}
