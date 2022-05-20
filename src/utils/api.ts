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
  noOfTeams: number
  notes: string[]
}

export const getGameState = (id: string): Promise<IGameState> => {
  // TODO: Backend call
  const mockResult = {
    id: '123',
    name: 'Nytt spel',
    noOfNotes: 3,
    noOfTeams: 4,
    notes: [],
  }
  return Promise.resolve(mockResult)
}
