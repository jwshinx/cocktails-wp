import React from 'react'

import CocktailShortDetail from '../cocktail-detail/CocktailShortDetail'
import CocktailLongDetail from '../cocktail-detail/CocktailLongDetail'
import {
  GeneralDrink,
  PropertyType,
  CocktailFilter,
  DetailDrink,
} from '../../models/cocktail'
import genericSearch from '../../utils/genericSearch'
import genericSort from '../../utils/genericSort'
import genericFilter from '../../utils/genericFilter'

interface CocktailListProps {
  segmentType: string
  data: GeneralDrink[]
  query: string
  sortProperty: PropertyType<GeneralDrink>
  filterProperties: Array<CocktailFilter<GeneralDrink>>
}

const CocktailList = (props: CocktailListProps): JSX.Element => {
  if (!props.data) {
    return <div></div>
  }

  const { segmentType, data, query, sortProperty, filterProperties } = props

  let containerCss = ''
  if (segmentType && segmentType === 'filter') {
    containerCss = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'
  }

  return (
    <div className={`${containerCss}`}>
      {data
        .filter((item) =>
          genericSearch(item, ['idDrink', 'strDrink'], query, false)
        )
        .filter((item) => genericFilter(item, filterProperties))
        .sort((a, b) => genericSort(a, b, sortProperty))
        .map((item: GeneralDrink): JSX.Element => {
          if (segmentType && segmentType === 'search') {
            return (
              <CocktailLongDetail
                key={item.idDrink}
                item={item as DetailDrink}
              />
            )
          } else {
            return (
              <CocktailShortDetail
                segmentType={segmentType}
                key={item.idDrink}
                data={item}
              />
            )
          }
        })}
    </div>
  )
}

export default CocktailList
