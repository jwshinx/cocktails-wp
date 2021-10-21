import React from 'react'

// import classes from './CocktailDetail.module.css';
import { GeneralDrink, DetailDrink } from '../../models/cocktail'
import CocktailLongDetail from './CocktailLongDetail'
import BaseDrink from '../../models/BaseDrink'
import ThumbnailArea from '../thumbnail/ThumbnailArea'

const CocktailShortDetail = ({
  data,
  segmentType,
}: {
  data: GeneralDrink
  segmentType: string
}): JSX.Element => {
  const drink = new BaseDrink(data)

  if (segmentType && segmentType === 'search') {
    return <CocktailLongDetail item={data as DetailDrink} />
  }

  return (
    <div className="col">
      <div className="card mb-4">
        <ThumbnailArea item={data} />
        <div className="card-body" style={{ height: '100px' }}>
          <h5 className="card-title">{drink.strDrink}</h5>
        </div>
      </div>
    </div>
  )
}

export default CocktailShortDetail
