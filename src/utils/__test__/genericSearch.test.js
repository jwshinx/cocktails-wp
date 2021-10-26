import genericSearch from '../genericSearch'
import '@testing-library/jest-dom'
// import { PropertyType, GeneralDrink } from '../../models/cocktail'

const martiniData = { idDrink: '1', strDrink: 'Martini' }

describe('filtering for "aR" against "idDrink" or "strDring"', () => {
  describe('on "Martini"', () => {
    describe('when case sensitive', () => {
      const isCaseSensitive = true

      it('should return true', () => {
        const result = genericSearch(
          martiniData,
          ['idDrink', 'strDrink'],
          'aR',
          isCaseSensitive
        )
        expect(result).toBeFalsy
      })
    })

    describe('when case insensitive', () => {
      const isCaseSensitive = false

      it('should return true', () => {
        const result = genericSearch(
          martiniData,
          ['idDrink', 'strDrink'],
          'aR',
          isCaseSensitive
        )
        expect(result).toBeTruthy
      })
    })
  })
})

describe('filtering for "zz" against "idDrink" or "strDring"', () => {
  describe('on "Martini"', () => {
    describe('when case sensitive', () => {
      const isCaseSensitive = true

      it('should return false', () => {
        const result = genericSearch(
          martiniData,
          ['idDrink', 'strDrink'],
          'zz',
          isCaseSensitive
        )
        expect(result).toBeFalsy
      })
    })

    describe('when case insensitive', () => {
      const isCaseSensitive = false

      it('should return false', () => {
        const result = genericSearch(
          martiniData,
          ['idDrink', 'strDrink'],
          'zz',
          isCaseSensitive
        )
        expect(result).toBeFalsy
      })
    })
  })
})
