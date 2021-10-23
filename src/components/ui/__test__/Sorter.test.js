/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import Sorter from '../Sorter'

const mockFn = jest.fn(() => true)

const data = [
  { idDrink: '1', strDrink: 'Martini' },
  { idDrink: '2', strDrink: 'Greyhound' },
  { idDrink: '3', strDrink: 'Mai Tai' },
  { idDrink: '4', strDrink: 'Rob Roy' },
]

it('should render a combobox  ', () => {
  render(<Sorter objects={data} onSortPropertyClick={mockFn} />)
  const combobox = screen.getByRole('combobox')
  expect(combobox).toBeInTheDocument()
})

it('should render 4 options: "idDrink" and "strDrink" -- "asc", "desc"', () => {
  render(<Sorter objects={data} onSortPropertyClick={mockFn} />)
  const options = screen.getAllByRole('option')
  expect(options.length).toBe(4)
})

it('should snapshot Sorter', () => {
  const tree = renderer
    .create(<Sorter objects={data} onSortPropertyClick={mockFn} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
