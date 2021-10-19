import React from 'react'

import SegmentTypeSelector from '../segment-type-selector/SegmentTypeSelector'
import SegmentKeySelector from '../segment-key-selector/SegmentKeySelector'
import { SegmentKeyType, SegmentType } from '../../models/cocktail'

interface SegmentProps {
  segmentType: string
  segmentKey: SegmentKeyType
  segmentValue: string
  onSegmentTypeChange: (value: SegmentType) => void
  onSegmentKeyChange: (keyType: SegmentKeyType) => void
  onSegmentValueChange: (value: string) => void
}

export default function Segment(props: SegmentProps): JSX.Element {
  const {
    segmentType,
    segmentValue,
    onSegmentTypeChange,
    onSegmentKeyChange,
    onSegmentValueChange,
  } = props

  return (
    <div className="segment">
      <SegmentTypeSelector
        onSegmentKeyChange={onSegmentKeyChange}
        onSegmentTypeChange={onSegmentTypeChange}
        onSegmentValueChange={onSegmentValueChange}
        onSortPropertyClick={onSegmentTypeChange}
      />
      <SegmentKeySelector
        segmentType={segmentType}
        segmentValue={segmentValue}
        onSegmentKeyChange={onSegmentKeyChange}
        onSegmentValueChange={onSegmentValueChange}
      />

      {/* {renderKeyValueInputArea()} */}
    </div>
  )
}
