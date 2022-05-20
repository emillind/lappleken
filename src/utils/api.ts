import axios from 'axios'

export const setupGame = (name: string, teams: string[], noOfNotes: number): Promise<any> => {
  const game = {
    name,
    teams,
    noOfNotes,
  }
  return axios.put('http://localhost:3001/game', game)
}

interface IGameState {
  id: string
  name: string
  noOfNotes: number
  teams: string[]
  notes: string[]
}

export const getGameState = (id: string): Promise<IGameState> => {
  return axios.get('http://localhost:3001/game/' + id).then((res) => res.data)
}

export const addNotesToGame = (gameId: string, notes: string[]): Promise<any> => {
  const body = {
    id: gameId,
    notes,
  }
  return axios.post('http://localhost:3001/addNotes', body)
}
