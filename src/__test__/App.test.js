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

/*
describe('when aaa', () => {
  it('bbb', async () => {
    // jest.spyOn(window, 'fetch').mockResolvedValue({
    //   json: async () => ({ title: 'Fetched' }),
    // })

    const dom = render(<App />)
    const elem = screen.getByPlaceholderText(/letter or cocktail name/)
    userEvent.type(elem, 'c')
    expect(dom).toMatchSnapshot()

    const { act } = renderer
    act(() => {
      // const text = screen.findByTestId('cocktail-detail-0')
      screen.findByTestId('cocktail-detail-0')
      // console.log(`+++> text`, text)
      // screen.debug()
      // expect(text).toBeInTheDocument()
    })

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
*/

/*
describe('when ccc', () => {
  it('ddd', async () => {
    var axios = require('axios')
    var MockAdapter = require('axios-mock-adapter')
    var mock = new MockAdapter(axios)
    mock.onGet('/search.php?f=c').reply(200, {
      drinks: [
        {
          idDrink: '123123',
          strDrink: 'Negroni',
          strIngredient1: 'gin',
        },
      ],
    })

    // works!
    // axios.get('/search.php?f=c').then(function (response) {
    //   console.log('+++> response:', response.data.drinks)
    // })

    // /// start //////////////////////////////////////////////////////
    // this works
    // axios.get('/search.php?f=c').then(function (response) {
    //   console.log('+++> response:', response.data.drinks)
    // })

    // const { queryByText, getByTestId } = render(<App />)
    // // expect(queryByText('')).toBeInTheDocument()
    // console.log(`queryByText:`, queryByText)
    // const { act } = renderer
    // act(() => {
    //   waitFor(() => {
    //     const xxx = getByTestId('cocktail-detail-0')
    //     console.log('+++> xxx:', xxx)
    //     expect(xxx).toBeInTheDocument()
    //   })
    //   // screen.debug()
    // })
    // /// end //////////////////////////////////////////////////////

    // /// start //////////////////////////////////////////////////////
    // works
    // axios.get('/search.php?f=c').then(function (response) {
    //   console.log('+++> response:', response.data.drinks)
    // })

    // const aaa = render(<App />)
    // // expect(queryByText('')).toBeInTheDocument()
    // // console.log(`+++> aaa:`, aaa)
    // const { act } = renderer
    // let ccc = ''
    // act(() => {
    //   waitFor(() => {
    //     const bbb = aaa.findByTestId('cocktail-detail-0')
    //     // const xxx = getByTestId('cocktail-detail-0')
    //     ccc = bbb.textContent
    //     console.log('+++> bbb:', bbb)
    //     expect(bbb).toBeInTheDocument()
    //     console.log(`+++ ccc 3:`, ccc)
    //   })
    //   console.log(`+++ ccc 1:`, ccc)
    //   const mmm = render(<App />)
    //   const nnn = mmm.findByTestId('cocktail-detail-0')
    //   console.log(`+++> nnn`, nnn)
    //   // screen.debug()
    // })
    // console.log(`+++ ccc 2:`, ccc)
    // /// end //////////////////////////////////////////////////////

    // just notes
    // const {act} = renderer;
    // // ...
    // act(() => ...);
    //     at App (/Users/cody/Documents/projects/cocktails-wp/src/App.tsx:32:39)

    const { act } = renderer
    axios.get('/search.php?f=c').then(function (response) {
      console.log('+++> response:', response.data.drinks)
    })

    // console.log(`+++> hello 1`)
    // const { queryByText, getByTestId } = render(<App />)
    // console.log('+++> queryByText:', queryByText)

    // const screen = render(<App />)

    act(() => {
      waitFor(() => getByTestId('cocktail-detail-0'))

      // expect(queryByText(/Loading/i)).not.toBeInTheDocument()
      // expect(queryByText(/Walk the dog/i)).toBeInTheDocument()
      // expect(screen.findByText(/Walk the dog/i)).toBeInTheDocument()
      // screen.debug()
    })

    // await waitFor(() => {
    //   // const aaa = render(<App />)
    //   // const bbb = aaa.findByTestId('cocktail-detail-0')
    //   // ccc = bbb.textContent
    //   // console.log('+++> bbb:', bbb)
    //   // expect(bbb).toBeInTheDocument()
    //   // console.log(`+++ ccc 3:`, ccc)
    //   console.log(`+++> hello 1`)
    //   // const aaa = render(<App />)
    //   const { queryByText, getByTestId } = render(<App />)
    //   console.log('+++> queryByText:', queryByText)
    //   const bbb = aaa.findByTestId('cocktail-detail-0')
    //   console.log('+++> bbb:', bbb)
    //   console.log(`+++> hello 100`)
    // })

    // axios.get = jest.fn().mockResolvedValue(response.data.drinks)

    // const { act } = renderer
    // act(() => {
    //   // const text = screen.findByTestId('cocktail-detail-0')
    //   screen.findByTestId('cocktail-detail-0')
    //   // console.log(`+++> text`, text)
    //   screen.debug()
    //   // expect(text).toBeInTheDocument()
    // })
  })
})
*/

// describe('when eee', () => {
//   it('fff', async () => {
//     // https://javascript.tutorialink.com/testing-debounced-function-in-react-component-with-jest-and-enzyme/
//     jest.useFakeTimers()

//     var axios = require('axios')
//     var MockAdapter = require('axios-mock-adapter')
//     var mock = new MockAdapter(axios)
//     mock.onGet('/search.php?f=c').reply(200, {
//       drinks: [
//         {
//           idDrink: '123123',
//           strDrink: 'Negroni',
//           strIngredient1: 'gin',
//         },
//       ],
//     })
//     // const { act } = renderer
//     axios.get('/search.php?f=c').then(function (response) {
//       console.log('+++> response:', response.data.drinks)
//     })

//     console.log('+++> ttt 1')
//     jest.advanceTimersByTime(3000)
//     console.log('+++> ttt 2')
//     // await screen.findByTestId('cocktail-detail-0')
//     const { act } = renderer
//     await act(() => {
//       console.log('+++> ttt 3')
//       jest.advanceTimersByTime(3000)
//       screen.findByTestId('cocktail-detail-0')
//     })

//     console.log('+++> ttt 4')
//   })
// })

/*
// https://simonkkaranja.medium.com/react-testing-mocking-axios-with-axios-mock-adapter-e24752a55923
describe('ggg', () => {
  it('hhh', async () => {
    // jest.useFakeTimers()

    var axios = require('axios')
    var MockAdapter = require('axios-mock-adapter')
    var mock = new MockAdapter(axios)
    mock.onGet('/search.php?f=c').reply(200, {
      drinks: [
        {
          idDrink: '123123',
          strDrink: 'Negroni',
          strIngredient1: 'gin',
        },
      ],
    })

    render(<App />)
    // const headerElems = screen.getAllByRole('heading', { name: 'Cocktails' })

    // const { queryByText, getByTestId } = render(<App />)

    // expect(queryByText(/Loading/i)).toBeInTheDocument()
    // expect(queryByText(/Walk the dog/i)).not.toBeInTheDocument()

    await waitFor(() => screen.findByTestId('cocktail-detail-0'))
    // expect(queryByText(/Loading/i)).not.toBeInTheDocument()
    // expect(queryByText(/Walk the dog/i)).toBeInTheDocument()
  })
})
*/
