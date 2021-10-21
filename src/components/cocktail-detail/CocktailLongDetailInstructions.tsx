import React from 'react'
import { DetailDrink } from '../../models/cocktail'

interface CocktailLongDetailInstructionsProps {
  item: DetailDrink
}

const CocktailLongDetailInstructions: React.FC<CocktailLongDetailInstructionsProps> =
  (props) => {
    const { item } = props

    return (
      <div>
        <span>{item.strInstructions}</span>
      </div>
    )
  }

export default CocktailLongDetailInstructions
