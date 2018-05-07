export const getGames = () => {
  return availableGames.map(game => (
    {
      checked: false,
      ...game
    }
  ))
}

const availableGames = [
  {
    name: 'Med andra ord',
    description: 'Du ska, utan att säga ordet eller delar av ordet, beskriva ordet genom tal.'
  },
  {
    name: 'Med ett ord',
    description: 'Precis som "med andra ord", fast du får endast använda ett ord.'
  },
  {
    name: 'Charader',
    description: 'Du ska, utan att göra ljud, beskriva ordet med hjälp av gester och kroppsrörelser.'
  },
  {
    name: 'Nynna',
    description: 'Du ska, utan att göra gester, beskriva ordet genom att nynna med stängd mun.'
  }
]
