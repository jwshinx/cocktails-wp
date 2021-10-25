import genericFilter from '../genericFilter'
import '@testing-library/jest-dom'
// import { PropertyType, GeneralDrink } from '../../models/cocktail'

const generalDrinkData = [
  { idDrink: '1', strDrink: 'Martini' },
  { idDrink: '2', strDrink: 'n/a' },
]

describe('given a drink', () => {
  describe('and all properties are selected true', () => {
    const cocktailFilters = [{ property: 'idDrink', isTruthySelected: true }]

    it('should return true', () => {
      expect(genericFilter(generalDrinkData[0], cocktailFilters)).toBeTruthy()
    })

    describe('and its name value is "n/a"', () => {
      it('should return true', () => {
        expect(genericFilter(generalDrinkData[1], cocktailFilters)).toBeTruthy()
      })
    })
  })

  describe('and not all properties are selected true', () => {
    const cocktailFilters = [{ property: 'idDrink', isTruthySelected: false }]

    it('should return true', () => {
      cocktailFilters[0].isTruthySelected = false
      expect(genericFilter(generalDrinkData[0], cocktailFilters)).toBeFalsy()
    })

    describe('and its name value is "n/a"', () => {
      it('should return false', () => {
        expect(genericFilter(generalDrinkData[1], cocktailFilters)).toBeFalsy()
      })
    })
  })
})
