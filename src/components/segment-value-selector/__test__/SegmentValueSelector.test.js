/**
 * @jest-environment jsdom
 */

import React from 'react'
// import ReactDOM from 'react-dom'
// import { render } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import SegmentValueSelector from '../SegmentValueSelector'
import { AlcoholicFilterOptions } from '../../../models/cocktail'

it('should render label "SegmentValueSelector"', () => {
  render(<SegmentValueSelector items={AlcoholicFilterOptions} />)
  const elem = screen.getByText(/SegmentValueSelector/)
  expect(elem).toBeInTheDocument()
})

it('should render combobox', () => {
  render(<SegmentValueSelector items={AlcoholicFilterOptions} />)
  const elem = screen.getByRole('combobox')
  expect(elem).toBeInTheDocument()
})

it('should render options "filter" and "search"', () => {
  render(<SegmentValueSelector items={AlcoholicFilterOptions} />)
  expect(screen.getAllByRole('option', { name: 'Alcoholic' })).toBeTruthy()
  expect(screen.getAllByRole('option', { name: 'Non Alcoholic' })).toBeTruthy()
  expect(
    screen.getAllByRole('option', { name: 'Optional Alcohol' })
  ).toBeTruthy()
})

it('should snapshot SegmentValueSelector', () => {
  const tree = renderer
    .create(<SegmentValueSelector items={AlcoholicFilterOptions} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
