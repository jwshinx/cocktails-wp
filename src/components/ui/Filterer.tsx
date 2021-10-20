import React from 'react'
import { CocktailFilter } from '../../models/cocktail'

interface FilterProps<T> {
  objects: Array<T>
  properties: CocktailFilter<T>[]
  onFilterChange: (property: CocktailFilter<T>) => void
}

function Filterer<T>(props: FilterProps<T>) {
  const { properties, objects, onFilterChange } = props

  if (objects === undefined || objects === null) {
    return <></>
  }
  const object = objects.length > 0 ? objects[0] : {}

  const onCheckboxChange = (filterProperty: CocktailFilter<T>) => {
    // console.log("+++> Filter onCheckboxChange:", filterProperty);
    onFilterChange(filterProperty)
  }

  return (
    <div className="col-12">
      {Object.keys(object).map((key) => {
        return (
          <div key={key} className="row">
            <div
              className="form-check col-6 ml-5 pl-5"
              style={{ paddingLeft: '30px' }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id={`${key}-true`}
                value={key}
                onChange={() => {
                  onCheckboxChange({
                    property: key as keyof T,
                    isTruthySelected: true,
                  })
                }}
                checked={properties.some(
                  (property: CocktailFilter<T>) =>
                    property.property === key && property.isTruthySelected
                )}
              />
              <label htmlFor={`${key}-true`} className="form-check-label">
                {key} truthy
              </label>
            </div>

            <div className="form-check col-6">
              <input
                style={{ marginLeft: '3px', marginRight: '3px' }}
                className="form-check-input"
                onChange={() => {
                  onCheckboxChange({
                    property: key as keyof T,
                    isTruthySelected: false,
                  })
                }}
                checked={properties.some(
                  (property: CocktailFilter<T>) =>
                    property.property === key && !property.isTruthySelected
                )}
                type="checkbox"
                id={`${key}-false`}
                value={key}
              />
              <label htmlFor={`${key}-false`} className="form-check-label">
                {key} falsy
              </label>
            </div>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default Filterer
