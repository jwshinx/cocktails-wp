import _ from 'lodash'
import React from 'react'

import { PropertyType } from '../../models/cocktail'

function Sorter<T>({
  objects,
  onSortPropertyClick,
}: {
  objects: Array<T>
  onSortPropertyClick: (propertyType: PropertyType<T>) => void
}): JSX.Element {
  if (objects === undefined || objects === null || _.isEmpty(objects)) {
    return <></>
  }

  const object = objects.length > 0 ? objects[0] : {}

  const onSelectChange = (object: string): void => {
    // console.log("+++> Sorter onSelectChange fired!");
    const values: Array<string> = object.split('-')
    if (values.length === 2) {
      onSortPropertyClick({
        property: values[0] as keyof T,
        isDescending: values[1] === 'true',
      })
    }
  }

  return (
    <div className="form-group">
      <select
        className="form-select mb-3"
        id="sorter"
        onChange={(event) => onSelectChange(event.target.value)}
      >
        {Object.keys(object).map((key): JSX.Element => {
          return (
            <React.Fragment key={key}>
              <option key={`${key}-true`} value={`${key}-true`}>
                Sort by {key} descending
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                Sort by {key} ascending
              </option>
            </React.Fragment>
          )
        })}
        ;
      </select>
    </div>
  )
}

export default Sorter
