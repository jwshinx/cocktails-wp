import genericSort from '../genericSort'
import '@testing-library/jest-dom'
// import { PropertyType, GeneralDrink } from '../../models/cocktail'

const generalDrinkData = [
  { idDrink: '1', strDrink: 'Martini' },
  { idDrink: '2', strDrink: 'Greyhound' },
]

describe('when sorting drink id', () => {
  describe('by descending', () => {
    const property = { property: 'idDrink', isDescending: true }

    it('should return 1 when first one is lesser', () => {
      const result = genericSort(
        generalDrinkData[0], // 1
        generalDrinkData[1], // 2
        property
      )
      expect(result).toBe(1)
    })

    it('should return -1 when first one is greater', () => {
      const result = genericSort(
        generalDrinkData[1], // 2
        generalDrinkData[0], // 1
        property
      )
      expect(result).toBe(-1)
    })

    it('should return -0 when identical values', () => {
      const result = genericSort(
        generalDrinkData[1], // 2
        generalDrinkData[1], // 2
        property
      )
      expect(result).toBe(-0)
    })
  })

  describe('by ascending', () => {
    const property = { property: 'idDrink', isDescending: false }

    it('should return -1 when first one is lesser', () => {
      const result = genericSort(
        generalDrinkData[0], // 1
        generalDrinkData[1], // 2
        property
      )
      expect(result).toBe(-1)
    })

    it('should return 1 when first one is greater', () => {
      const result = genericSort(
        generalDrinkData[1], // 2
        generalDrinkData[0], // 1
        property
      )
      expect(result).toBe(1)
    })

    it('should return 0 when identical values', () => {
      const result = genericSort(
        generalDrinkData[1], // 2
        generalDrinkData[1], // 2
        property
      )
      expect(result).toBe(0)
    })
  })
})

describe('when sorting drink name', () => {
  describe('by descending', () => {
    const property = { property: 'strDrink', isDescending: true }

    it('should return -1 when first one is greater', () => {
      const result = genericSort(
        generalDrinkData[0], // Martini
        generalDrinkData[1], // Greyhound
        property
      )
      expect(result).toBe(-1)
    })

    it('should return 1 when first one is lesser', () => {
      const result = genericSort(
        generalDrinkData[1], // Greyhound
        generalDrinkData[0], // Martini
        property
      )
      expect(result).toBe(1)
    })

    it('should return -0 when identical values', () => {
      const result = genericSort(
        generalDrinkData[1], // Greyhound
        generalDrinkData[1], // Greyhound
        property
      )
      expect(result).toBe(-0)
    })
  })

  describe('by ascending', () => {
    const property = { property: 'strDrink', isDescending: false }

    it('should return 1 when first one is greater', () => {
      const result = genericSort(
        generalDrinkData[0], // Martini
        generalDrinkData[1], // Greyhound
        property
      )
      expect(result).toBe(1)
    })

    it('should return -1 when first one is lesser', () => {
      const result = genericSort(
        generalDrinkData[1], // Greyhound
        generalDrinkData[0], // Martini
        property
      )
      expect(result).toBe(-1)
    })

    it('should return 0 when identical values', () => {
      const result = genericSort(
        generalDrinkData[1], // Greyhound
        generalDrinkData[1], // Greyhound
        property
      )
      expect(result).toBe(0)
    })
  })
})
