/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'
// import userEvent from "@testing-library/user-event";
import React from 'react'
import renderer from 'react-test-renderer'

import { App } from '../App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should render App snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('renders properly', () => {
  it('should render 1 heading, 2 comboboxes and a searchbox', () => {
    render(<App />)
    const headerElems = screen.getAllByRole('heading', { name: 'Cocktails' })
    expect(headerElems.length).toBe(1)

    const comboboxElems = screen.getAllByRole('combobox')
    expect(comboboxElems.length).toBe(2)

    const searchElems = screen.getAllByRole('searchbox')
    expect(searchElems.length).toBe(1)
  })
})
