import React from 'react'

import {
  SegmentType,
  SegmentKeyType,
  FirstLetterSegmentKey,
  AlcoholicSegmentKey,
} from '../../models/cocktail'

interface SegmentTypeSelectorProps {
  onSegmentTypeChange: (value: SegmentType) => void
  onSegmentKeyChange: (value: SegmentKeyType) => void
  onSegmentValueChange: (value: string) => void
  onSortPropertyClick: (value: SegmentType) => void
  // onSortPropertyClick: (propertyType: PropertyType<T>) => void;
}

const SegmentTypeSelector = (props: SegmentTypeSelectorProps): JSX.Element => {
  const {
    onSegmentTypeChange,
    onSegmentKeyChange,
    onSegmentValueChange,
    onSortPropertyClick,
  } = props

  const onSelectChange = (value: string): void => {
    if (value === 'filter') {
      onSegmentKeyChange(AlcoholicSegmentKey)
    } else {
      onSegmentKeyChange(FirstLetterSegmentKey)
    }
    onSegmentTypeChange(value as SegmentType)
    onSegmentValueChange(AlcoholicSegmentKey.name)
    onSortPropertyClick(value as SegmentType)
  }

  return (
    <div className="form-group">
      <label htmlFor="type-selector">Enter type of search</label>
      <select
        className="form-select mb-3"
        id="type-selector"
        title="type-selector"
        // onChange={(event) => onSelectChange(event.target.value as keyof T)}
        onChange={(event) => onSelectChange(event.target.value)}
      >
        {['search', 'filter'].map((segmentType): JSX.Element => {
          return (
            <React.Fragment key={segmentType}>
              <option key={segmentType} value={segmentType}>
                {segmentType}
              </option>
            </React.Fragment>
          )
        })}
      </select>
    </div>
  )
}

export default SegmentTypeSelector
