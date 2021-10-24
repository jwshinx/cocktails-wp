/**
 * @jest-environment jsdom
 */

// import { render, screen, waitFor } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import userEvent from '@testing-library/user-event'
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

describe('when "filter" type clicked', () => {
  it('should trigger render of value selector', () => {
    const dom = render(<App />)

    // initially, default "search" renders 2 comboboxes
    const beforeDom = screen.getAllByRole('combobox')
    expect(beforeDom.length).toBe(2)

    // user selects "filter" type
    userEvent.selectOptions(screen.getByTitle('type-selector'), [
      screen.getByText('filter'),
    ])
    expect(screen.getByRole('option', { name: 'filter' }).selected).toBe(true)

    // after "filter" selection, 3 comboboxes are displayed
    const afterDom = screen.getAllByRole('combobox')
    expect(afterDom.length).toBe(3)

    // generate snapshot of new dom
    expect(dom).toMatchSnapshot()
  })
})

describe('when aaa', () => {
  it('bbb', async () => {
    // jest.spyOn(window, 'fetch').mockResolvedValue({
    //   json: async () => ({ title: 'Fetched' }),
    // })

    const dom = render(<App />)
    const elem = screen.getByPlaceholderText(/letter or cocktail name/)
    userEvent.type(elem, 'c')
    expect(dom).toMatchSnapshot()

    const text = await screen.findByTestId('cocktail-detail-0')
    // console.log(`+++> text`, text)
    screen.debug()
    expect(text).toBeInTheDocument()

    // await wait(() => {
    //   expect(getByText('mocked title')).toBeTruthy
    // })

    // await waitFor(() => {
    //   const text = screen.findByText('Cafe Savoy')
    //   expect(text).toBeInTheDocument()
    //   // console.log(`+++> xxx`, xxx)
    // })
    // await act(async () => {
    //   // render(<User id="123" />, container);
    //   screen.getByText('Cafe Savoy')
    // })
    // fireEvent.change(elem, { target: { value: 'c' } })

    // expect(elem.value).toBe('c')
  })
})
