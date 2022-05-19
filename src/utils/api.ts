export const setupGame = (name: string, teamSize: number, notes: number): Promise<string> => {
  // TODO: Backend call
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charactersLength = characters.length
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return Promise.resolve(result)
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
