import React from 'react'

import { SearchInput } from '../ui/SearchInput'

const SegmentValueInput = ({
  onSegmentValueChange,
}: {
  onSegmentValueChange: (value: string) => void
}): JSX.Element => {
  return (
    <div className="row">
      <span>Enter value</span>
      <br />
      <SearchInput
        placeholderText="(letter or cocktail name)"
        setSearchQuery={(query) => {
          onSegmentValueChange(query)
        }}
      />
    </div>
  )
}

export default SegmentValueInput
