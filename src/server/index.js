const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 3001
let games = {
  123:{
    notes:["one", "two", "three"],
    gameId:"123"
  }
}

app.use(cors())
app.use(express.json());

app.post('/createGame', (req, res) => {

  const id = createId()
  games[id] = {
    notes:[],
    numOfTeams: req.params.numOfTeams
  }
  res.send(id)
})

app.post("/addNotes", (req, res) => {
  const gameId = req.body.gameId
  const notes = req.body.notes
  if(!games[gameId]){
    res.status(400).send("Could not find game id")
  }
  if(!notes || notes.length === 0){
    res.status(400).send("No notes provided")
  }
  notes.forEach(note => {
    games[gameId].notes.push(note)
  });
  res.send("Notes added successfully")
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
