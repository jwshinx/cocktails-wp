import React, { FC } from 'react'
// import { Meta, Story } from '@storybook/react'
import SegmentTypeSelector from '../components/segment-type-selector/SegmentTypeSelector'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { SegmentType, SegmentKeyType } from '../models/cocktail'

interface SegmentTypeSelectorProps {
  onSegmentTypeChange: (value: SegmentType) => void
  onSegmentKeyChange: (value: SegmentKeyType) => void
  onSegmentValueChange: (value: string) => void
  onSortPropertyClick: (value: SegmentType) => void
}

export default {
  title: 'foobar',
  component: SegmentTypeSelector,
}

const onSegmentKeyChange = () => {
  console.log('xxx')
}
const onSegmentTypeChange = () => {
  console.log('aaa')
}
const onSegmentValueChange = () => {
  console.log('bbb')
}

export const First: FC<SegmentTypeSelectorProps> = (
  props: SegmentTypeSelectorProps
) => {
  const { onSegmentKeyChange, onSegmentTypeChange, onSegmentValueChange } =
    props
  return (
    <SegmentTypeSelector
      onSegmentKeyChange={onSegmentKeyChange}
      onSegmentTypeChange={onSegmentTypeChange}
      onSegmentValueChange={onSegmentValueChange}
      onSortPropertyClick={onSegmentTypeChange}
    />
  )
}

export const Green = () => (
  <First
    onSegmentKeyChange={onSegmentKeyChange}
    onSegmentTypeChange={onSegmentTypeChange}
    onSegmentValueChange={onSegmentValueChange}
    onSortPropertyClick={onSegmentTypeChange}
  />
)
