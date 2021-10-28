import React from 'react'
import SegmentValueSelectorOptions from './SegmentValueSelectorOptions'
import { OptionValueType } from '../../models/cocktail'

export default function SegmentValueSelector({
  items,
  onSegmentValueChange,
}: {
  items: Array<OptionValueType>
  onSegmentValueChange: (value: string) => void
}): JSX.Element {
  const onValueSelectorChange = (event: any): void => {
    onSegmentValueChange(event.target.value as string)
  }

  return (
    <div className="form-group">
      <label htmlFor="segment-value">Enter variety</label>
      <select
        className="form-select mb-3"
        id="segment-value"
        onChange={(event) => onValueSelectorChange(event)}
      >
        <SegmentValueSelectorOptions items={items} />
      </select>
    </div>
  )
}
