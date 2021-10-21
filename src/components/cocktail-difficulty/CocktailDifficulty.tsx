import React from 'react'
import { DetailDrink } from '../../models/cocktail'
import FullDrink from '../../models/FullDrink'

export default function CocktailDifficulty({ item }: { item: DetailDrink }) {
  // console.log(`item`, item);

  const d = new FullDrink(item)

  const difficulty = d.getDifficulty()
  let colorCss = 'bg-success'

  if (difficulty === 'Moderate') {
    colorCss = 'bg-warning'
  } else if (difficulty === 'Difficult') {
    colorCss = 'bg-danger'
  }

  return (
    <div>
      <span className={`badge m-1 ${colorCss}`}>{d.getDifficulty()}</span>
    </div>
  )
}
