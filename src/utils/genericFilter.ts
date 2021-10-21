import { CocktailFilter } from '../models/cocktail'

export default function genericFilter<T>(
  object: T,
  filterProperties: Array<CocktailFilter<T>>
): boolean {
  // if (filterProperties.length > 0) {
  //   const value = object[filterProperties[0].property];
  // }
  return filterProperties.every((filterProperty) => {
    const { property, isTruthySelected } = filterProperty
    const value = object[filterProperties[0].property]

    if (isTruthySelected && sanitized(value)) {
      return object[property]
    } else if (!isTruthySelected && sanitized(value) === false) {
      return object[property]
    } else {
      return !object[property]
    }
  })
}

function sanitized<T>(value: T[keyof T]): boolean {
  if (typeof value === 'string' && (value === 'n/a' || value === 'unknown')) {
    return false
  }
  return true
}

// falsy values
// object: undefined, null, NaN
// string: ""
// number: 0
// boolean: false
