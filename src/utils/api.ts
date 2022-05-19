import axios from 'axios'

export const setupGame = (name: string, noOfTeams: number, noOfNotes: number): Promise<any> => {
  const game = {
    name,
    noOfTeams,
    noOfNotes,
  }
  return axios.put('http://localhost:3001/game', game)
}

interface IGameState {
  noteCount: number
}

export const getGameState = (id: string): Promise<IGameState> => {
  // TODO: Backend call
  const mockResult = {
    noteCount: 3,
  }
  return Promise.resolve(mockResult)
}
