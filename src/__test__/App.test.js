/**
 * @jest-environment jsdom
 */
// __tests__/fetch.test.js
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from '../App'
// import Fetch from '../fetch'
// import SegmentValueInput from '../components/segment-value-input/SegmentValueInput'

// const mockFn = jest.fn(() => true)

//  mock.onGet('/search.php?f=c').reply(200, {
const server = setupServer(
  rest.get('/search.php', (req, res, ctx) => {
    return res(ctx.json({ color: 'red' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// test('iii', async () => {
//   jest.useFakeTimers()
//   render(<App />)
//   const elem = screen.getByPlaceholderText(/letter or cocktail name/)

//   // act(() => {
//   fireEvent.change(elem, { target: { value: 'e' } })
//   // })
//   // expect(elem.value).toBe('e')
//   act(() => jest.advanceTimersByTime(8000))

//   await waitFor(() => screen.getByTestId('cocktail-detail-0'))
// })

test('jjj', async () => {
  // failure
  // server.use(
  //   // override the initial "GET /greeting" request handler
  //   // to return a 500 Server Error
  //   rest.get('/search.php', (req, res, ctx) => {
  //     return res(ctx.status(201))
  //   })
  // )

  // failure
  // const MockAdapter = require('axios-mock-adapter')
  // const axios = jest.requireActual('axios')
  // var mock = new MockAdapter(axios)
  // mock.onGet('/search.php').reply(200, {
  //   data: {
  //     drinks: [
  //       {
  //         idDrink: '123123',
  //         strDrink: 'Negroni',
  //         strIngredient1: 'gin',
  //       },
  //     ],
  //   },
  // })

  jest.useFakeTimers()
  render(<App />)
  jest.advanceTimersByTime(1000)

  act(() => {
    const elem = screen.getByPlaceholderText(/letter or cocktail name/)
    fireEvent.change(elem, { target: { value: 'e' } })
    jest.advanceTimersByTime(8000)
  })
  // expect(elem.value).toBe('e')
  // act(() => jest.advanceTimersByTime(8000))
  // jest.advanceTimersByTime(8000)

  await waitFor(() => screen.getByTestId('cocktail-detail-0'))
})

// https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
// https://mswjs.io/docs/basics/response-resolver
// https://testing-library.com/docs/react-testing-library/example-intro
// https://polvara.me/posts/how-to-test-asynchronous-methods
