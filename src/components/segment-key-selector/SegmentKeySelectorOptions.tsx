import React from 'react'

import { SegmentKeyType } from '../../models/cocktail'

const SegmentKeySelectorOptions = ({
  items,
}: {
  items: Array<SegmentKeyType>
}): JSX.Element => {
  return (
    <>
      {items.map((pair): JSX.Element => {
        return (
          <option key={pair.name} value={pair.name}>
            {pair.label}
          </option>
        )
      })}
    </>
  )
}

export default SegmentKeySelectorOptions
