const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
let games = {
  123: {
    notes: ['one', 'two', 'three'],
    id: '123',
    teams: [
      { name: 'Team 1', points: 10 },
      { name: 'Team 2', points: 18 },
      { name: 'Team 3', points: 14 },
    ],
    noOfNotes: 2,
    name: 'Test game',
    started: false,
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
    teams: teams.map((team) => ({ name: team, points: 0 })),
    notes: [],
    started: false,
  }
  res.send(id)
})

app.post('/addNotes', (req, res) => {
  const gameId = req.body.id
  const notes = req.body.notes
  if (!games[gameId]) {
    res.status(400).send('Could not find game id')
  }
  if (!notes || notes.length === 0) {
    res.status(400).send('No notes provided')
  }
  if (games[gameId].started) {
    res.status(400).send('Game has already started')
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

app.patch('/startGame/:id', (req, res) => {
  const id = req.params.id
  const game = games[id]
  if (game) {
    game.started = true
    game.teams[0].next = true
    res.send('Started game')
  }
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
