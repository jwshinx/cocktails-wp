import React from 'react'

import { DetailDrink } from '../../models/cocktail'
import FullDrink from '../../models/FullDrink'

export default function CocktailLongDetailIngredients({
  item,
}: {
  item: DetailDrink
}): JSX.Element {
  const d = new FullDrink(item)

  return (
    <div>
      <span>
        Ingredients ({d.allIngredients.length}): {d.getList()}
      </span>
    </div>
  )
}
