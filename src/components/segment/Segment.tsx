import React from 'react'

import styles from './Segment.module.css'

import SegmentTypeSelector from '../segment-type-selector/SegmentTypeSelector'
import SegmentKeySelector from '../segment-key-selector/SegmentKeySelector'
import SegmentValueInput from '../segment-value-input/SegmentValueInput'
import SegmentValueSelector from '../segment-value-selector/SegmentValueSelector'
import {
  SegmentKeyType,
  SegmentType,
  AlcoholicFilterOptions,
  CategoryFilterOptions,
  GlassFilterOptions,
} from '../../models/cocktail'

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
    segmentKey,
    segmentValue,
    onSegmentTypeChange,
    onSegmentKeyChange,
    onSegmentValueChange,
  } = props

  const renderKeyValueInputArea = () => {
    if (segmentType === 'search' || segmentKey.name === 'ingredient') {
      return <SegmentValueInput onSegmentValueChange={onSegmentValueChange} />
    }

    if (segmentKey.name === 'alcoholic') {
      return (
        <SegmentValueSelector
          onSegmentValueChange={onSegmentValueChange}
          items={AlcoholicFilterOptions}
        />
      )
    } else if (segmentKey.name === 'category') {
      return (
        <SegmentValueSelector
          onSegmentValueChange={onSegmentValueChange}
          items={CategoryFilterOptions}
        />
      )
    } else if (segmentKey.name === 'glass') {
      return (
        <SegmentValueSelector
          onSegmentValueChange={onSegmentValueChange}
          items={GlassFilterOptions}
        />
      )
    } else {
      return <></>
    }
  }

  return (
    <div className={styles.segment}>
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

      {renderKeyValueInputArea()}
    </div>
  )
}
