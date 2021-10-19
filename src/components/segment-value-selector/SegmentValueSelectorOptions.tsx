import React from 'react'

import { OptionValueType } from '../../models/cocktail'

const SegmentValueSelectorOptions = ({
  items,
}: {
  items: Array<OptionValueType>
}): JSX.Element => {
  return (
    <>
      {items.map((pair: OptionValueType): JSX.Element => {
        return (
          <option key={pair.value} value={pair.value}>
            {pair.label}
          </option>
        )
      })}
    </>
  )
}

export default SegmentValueSelectorOptions
