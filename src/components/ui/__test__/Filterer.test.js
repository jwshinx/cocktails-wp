/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import Filterer from '../Filterer'

const mockFn = jest.fn(() => true)

describe('when GeneralDrink', () => {
  const generalDrinkData = [
    { idDrink: '1', strDrink: 'Martini' },
    { idDrink: '2', strDrink: 'Greyhound' },
    { idDrink: '3', strDrink: 'Mai Tai' },
    { idDrink: '4', strDrink: 'Rob Roy' },
  ]

  const generalDrinkProperties = [
    { property: { idDrink: '1', strDrink: 'Martini' }, isTruthySelected: true },
  ]

  it('should render 4 checkboxes/labels', () => {
    render(
      <Filterer
        objects={generalDrinkData}
        properties={generalDrinkProperties}
        onFilterChange={mockFn}
      />
    )
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBe(4)
    expect(screen.getByLabelText('idDrink truthy')).toBeInTheDocument()
    expect(screen.getByLabelText('idDrink falsy')).toBeInTheDocument()
    expect(screen.getByLabelText('strDrink truthy')).toBeInTheDocument()
    expect(screen.getByLabelText('strDrink falsy')).toBeInTheDocument()
  })

  it('should snapshot GeneralDrink Filterer', () => {
    const tree = renderer
      .create(
        <Filterer
          objects={generalDrinkData}
          properties={generalDrinkProperties}
          onFilterChange={mockFn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when DetailDrink', () => {
  const detailDrinkData = [
    { idDrink: '1', strDrink: 'Martini', strIngredient1: 'gin' },
    { idDrink: '2', strDrink: 'Greyhound', strIngredient1: 'vodka' },
    { idDrink: '3', strDrink: 'Mai Tai', strIngredient1: 'rum' },
    { idDrink: '4', strDrink: 'Rob Roy', strIngredient1: 'whiskey' },
  ]

  const detailDrinkProperties = [
    {
      property: { idDrink: '1', strDrink: 'Martini', strIngredient1: 'gin' },
      isTruthySelected: true,
    },
  ]

  it('should render 6 checkboxes/labels', () => {
    render(
      <Filterer
        objects={detailDrinkData}
        properties={detailDrinkProperties}
        onFilterChange={mockFn}
      />
    )
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes.length).toBe(6)
    expect(screen.getByLabelText('idDrink truthy')).toBeInTheDocument()
    expect(screen.getByLabelText('idDrink falsy')).toBeInTheDocument()
    expect(screen.getByLabelText('strDrink truthy')).toBeInTheDocument()
    expect(screen.getByLabelText('strDrink falsy')).toBeInTheDocument()
    expect(screen.getByLabelText('strIngredient1 truthy')).toBeInTheDocument()
    expect(screen.getByLabelText('strIngredient1 falsy')).toBeInTheDocument()
  })

  it('should snapshot DetailDrink Filterer', () => {
    const tree = renderer
      .create(
        <Filterer
          objects={detailDrinkData}
          properties={detailDrinkProperties}
          onFilterChange={mockFn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
