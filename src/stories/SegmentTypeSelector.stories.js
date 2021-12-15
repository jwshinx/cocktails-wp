// import React from 'react'
// import { Meta, Story } from '@storybook/react'
import SegmentTypeSelector from '../components/segment-type-selector/SegmentTypeSelector'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import { SegmentType } from '../models/cocktail'

export default {
  title: 'foobar',
  // onSegmentKeyChange: (value: SegmentType) => void,
  // onSegmentKeyChange: any,
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

export const First = () => {
  return (
    <SegmentTypeSelector
      onSegmentKeyChange={onSegmentKeyChange}
      onSegmentTypeChange={onSegmentTypeChange}
      onSegmentValueChange={onSegmentValueChange}
      onSortPropertyClick={onSegmentTypeChange}
    />
  )
}

export const Red = () => <First />
