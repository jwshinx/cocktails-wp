import React from 'react'

import { SearchInput } from '../ui/SearchInput'
import { SegmentKeyType } from '../../models/cocktail'

const SegmentValueInput = ({
  onSegmentValueChange,
  segmentKey,
}: {
  segmentType: string
  segmentKey: SegmentKeyType
  onSegmentValueChange: (value: string) => void
}): JSX.Element => {
  const { name: segmentKeyName } = segmentKey
  const placeholderTxt = `${
    segmentKeyName === 'firstLetter' ? "(eg: first letter 'g')" : "(eg: 'gin')"
  }`

  return (
    <div className="row">
      <span>Enter value</span>
      <br />
      <SearchInput
        placeholderText={placeholderTxt}
        setSearchQuery={(query) => {
          onSegmentValueChange(query)
        }}
      />
    </div>
  )
}

export default SegmentValueInput
