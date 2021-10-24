const mockResponse = {
  data: {
    drinks: [
      {
        idDrink: '123123',
        strDrink: 'Negroni',
        strIngredient1: 'gin',
      },
    ],
  },
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
}
