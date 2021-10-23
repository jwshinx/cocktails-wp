/**
 * @jest-environment jsdom
 */

import React from 'react'
// import ReactDOM from 'react-dom'
// import { render } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import SegmentTypeSelector from '../SegmentTypeSelector'

it('should render label "Enter category of search"', () => {
  render(<SegmentTypeSelector />)
  const elem = screen.getByText(/Enter type of search/)
  expect(elem).toBeInTheDocument()
})

it('should render combobox', () => {
  render(<SegmentTypeSelector />)
  const elem = screen.getByRole('combobox')
  expect(elem).toBeInTheDocument()
})

it('should render options "filter" and "search"', () => {
  render(<SegmentTypeSelector />)
  expect(screen.getAllByRole('option', { name: 'search' })).toBeTruthy()
  expect(screen.getAllByRole('option', { name: 'filter' })).toBeTruthy()
})

it('should snapshot SegmentTypeSelector', () => {
  const tree = renderer.create(<SegmentTypeSelector />).toJSON()
  expect(tree).toMatchSnapshot()
})
