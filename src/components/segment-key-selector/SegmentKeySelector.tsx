import React from 'react'

import SegmentKeySelectorOptions from './SegmentKeySelectorOptions'
import {
  SegmentKeyType,
  AlcoholicSegmentKey,
  CategorySegmentKey,
  IngredientSegmentKey,
  GlassSegmentKey,
  CocktailNameSegmentKey,
  FirstLetterSegmentKey,
  OrdinaryDrinkValue,
  HighballGlassValue,
} from '../../models/cocktail'

interface SegmentKeySelectorProps {
  onSegmentKeyChange: (keyType: SegmentKeyType) => void
  onSegmentValueChange: (value: string) => void
  segmentType: string
  segmentValue: string
}

const SearchByKeyPairs = [FirstLetterSegmentKey, CocktailNameSegmentKey]

const FilterByKeyPairs = [
  AlcoholicSegmentKey,
  CategorySegmentKey,
  IngredientSegmentKey,
  GlassSegmentKey,
]

const SegmentKeySelector = (props: SegmentKeySelectorProps): JSX.Element => {
  const { onSegmentValueChange, onSegmentKeyChange, segmentType } = props

  const onSelectChange = (value: string): void => {
    if (value === 'cocktailName') {
      onSegmentKeyChange(CocktailNameSegmentKey)
    } else if (value === 'glass') {
      onSegmentKeyChange(GlassSegmentKey)
      onSegmentValueChange(HighballGlassValue.value)
    } else if (value === 'category') {
      onSegmentKeyChange(CategorySegmentKey)
      onSegmentValueChange(OrdinaryDrinkValue.value)
    } else if (value === 'firstLetter') {
      onSegmentKeyChange(FirstLetterSegmentKey)
      onSegmentValueChange('a')
    } else if (value === 'ingredient') {
      onSegmentKeyChange(IngredientSegmentKey)
    } else if (value === 'alcoholic') {
      onSegmentKeyChange(AlcoholicSegmentKey)
      onSegmentValueChange('alcoholic')
    }
  }

  return (
    <div className="form-group">
      <label htmlFor="segment-key">Enter category of search</label>
      <select
        className="form-select mb-3"
        id="segment-key"
        // onChange={(event) => onSelectChange(event.target.value as keyof T)}
        onChange={(event) => {
          onSelectChange(event.target.value)
        }}
      >
        {segmentType === 'filter' ? (
          <SegmentKeySelectorOptions items={FilterByKeyPairs} />
        ) : (
          <SegmentKeySelectorOptions items={SearchByKeyPairs} />
        )}
      </select>
    </div>
  )
}

export default SegmentKeySelector
