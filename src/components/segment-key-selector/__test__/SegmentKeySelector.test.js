/**
 * @jest-environment jsdom
 */

import React from 'react'
// import ReactDOM from 'react-dom'
// import { render } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import SegmentKeySelector from '../SegmentKeySelector'

it('should render label "Enter category of search"', () => {
  render(<SegmentKeySelector />)
  const elem = screen.getByText(/Enter category of search/)
  expect(elem).toBeInTheDocument()
})

it('should render combobox', () => {
  render(<SegmentKeySelector />)
  const elem = screen.getByRole('combobox')
  expect(elem).toBeInTheDocument()
})

it('should snapshot SegmentKeySelectorOptions', () => {
  const tree = renderer.create(<SegmentKeySelector />).toJSON()
  expect(tree).toMatchSnapshot()
})
