import React from 'react'

import { SearchInput } from '../ui/SearchInput'
import { SegmentKeyType } from '../../models/cocktail'

interface SegmentValueInputProps {
  segmentType: string
  segmentKey: SegmentKeyType
  onSegmentValueChange: (value: string) => void
}

const SegmentValueInput = ({
  onSegmentValueChange,
  segmentKey,
}: SegmentValueInputProps): JSX.Element => {
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
