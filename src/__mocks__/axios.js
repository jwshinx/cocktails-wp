// const mockResponse = {
//   data: {
//     drinks: [
//       {
//         idDrink: '123123',
//         strDrink: 'Negroni',
//         strIngredient1: 'gin',
//       },
//     ],
//   },
// }

// export default {
//   get: jest.fn().mockResolvedValue(mockResponse),
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++
// import axios from 'axios'

// const axios = {
//   get: jest.fn(() => {
//     console.log('+++> mock axios 1')
//     Promise.resolve({ data: {} })
//   }),
//   create: () => axios,
//   defaults: {
//     adapter: {},
//   },
// }

// export default axios

// +++++++++++++++++++++++++++++++++++++++++++++++++
import _ from 'lodash'

const axios = jest.requireActual('axios')
jest.unmock('axios')

const MockAdapter = require('axios-mock-adapter')
const mockAxios = new MockAdapter(axios)

// nothing important seems to be overwritten
module.exports = _.assignIn(axios, mockAxios)

// var mock = new MockAdapter(axios)
// mock.onGet('/search.php?f=c').reply(200, {
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
