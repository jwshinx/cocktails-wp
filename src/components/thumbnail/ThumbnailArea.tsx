import React from 'react'

import { GeneralDrink } from '../../models/cocktail'

export default function ThumbnailArea({ item }: { item: GeneralDrink }) {
  return (
    <>
      <img
        className="card-img-top"
        src={item.strDrinkThumb}
        alt={item.strDrink}
      />
    </>
  )
}
