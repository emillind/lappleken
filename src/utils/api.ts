import axios from "axios"

export const setupGame = (name: string, teamSize: number, notes: number): Promise<any> => {
  const game = {
    name,
    teamSize,
    notes,
  }
  return axios.post("http://192.168.1.8:3001/createGame", game)
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
