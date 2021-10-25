import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import _ from 'lodash'

import styles from './App.module.css'
// import IMAGE from './gsw.png'
// import LOGO from './logo.svg'

import Title from './components/title/Title'
import cocktails from './api/cocktails'
import Segment from './components/segment/Segment'
// import { Counter } from './components/Counter'
// import Footer from './components/Footer'
import { SearchInput } from './components/ui/SearchInput'
import Sorter from './components/ui/Sorter'
import Filterer from './components/ui/Filterer'
import CocktailList from './components/cocktail-list/CocktailList'
import {
  GeneralDrink,
  SegmentType,
  SegmentKeyType,
  FirstLetterSegmentKey,
  PropertyType,
  CocktailFilter,
  // DetailDrink,
  ApiRawCocktailData,
} from './models/cocktail'

export const App = () => {
  const [dataResult, setDataResult] = useState<Array<GeneralDrink>>([])
  const [query, setQuery] = useState<string>('')
  const [segmentType, setSegmentType] = useState<SegmentType>('search')
  const [segmentKey, setSegmentKey] = useState<SegmentKeyType>(
    FirstLetterSegmentKey
  )
  const [segmentValue, setSegmentValue] = useState('c')
  const [sortProperty, setSortProperty] = useState<PropertyType<GeneralDrink>>({
    property: 'strDrink',
    isDescending: false,
  })
  const [filterProperties, setFilterProperties] = useState<
    Array<CocktailFilter<GeneralDrink>>
  >([])

  useEffect(() => {
    const search = async () => {
      try {
        const url = `/${segmentType}.php?${segmentKey.value}=${segmentValue}`
        // console.log('+++> cocktails url 1:', url)
        const { data }: { data: ApiRawCocktailData } = await cocktails.get(url)
        // console.log('+++> cocktails fetched data 6:', data)

        setDataResult(data.drinks as Array<GeneralDrink>)
      } catch (error) {
        console.log('+++> api error:', error)
      }
    }

    const identifier = setTimeout(() => {
      if (segmentValue !== '') {
        search()
      }
    }, 2000)

    return () => {
      clearTimeout(identifier)
    }
  }, [segmentValue, segmentType, segmentKey])

  // console.log(`+++> dataResult:`, dataResult)
  // console.log(`+++> query:`, query)

  const onCocktailFilterChange = (
    propertyType: CocktailFilter<GeneralDrink>
  ): void => {
    const propertyOnlyMatch = filterProperties.some((filterProperty) => {
      return filterProperty.property === propertyType.property
    })

    const fullMatch = filterProperties.some((filterProperty) => {
      return (
        filterProperty.property === propertyType.property &&
        filterProperty.isTruthySelected === propertyType.isTruthySelected
      )
    })

    if (fullMatch) {
      setFilterProperties(
        filterProperties.filter(
          (filterProperty) => filterProperty.property !== propertyType.property
        )
      )
    } else if (propertyOnlyMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => filterProperty.property !== propertyType.property
        ),
        propertyType,
      ])
    } else {
      setFilterProperties([...filterProperties, propertyType])
    }
  }

  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className={`col-4 ${styles.sidenav}`}>
            <div className="row mt-4">
              <Title text="Cocktails" />
            </div>
            <div className="row">
              <Segment
                segmentType={segmentType}
                segmentKey={segmentKey}
                segmentValue={segmentValue}
                onSegmentTypeChange={setSegmentType}
                onSegmentKeyChange={setSegmentKey}
                onSegmentValueChange={setSegmentValue}
              />
            </div>

            <div className="row mt-3">
              {_.isEmpty(dataResult) ? (
                <></>
              ) : (
                <SearchInput
                  placeholderText="Search name further"
                  setSearchQuery={(query) => {
                    setQuery(query)
                  }}
                />
              )}
            </div>
            <div className="row mt-3">
              <Sorter
                objects={dataResult}
                onSortPropertyClick={setSortProperty}
              />
            </div>
            <div className="row">
              <Filterer
                objects={dataResult}
                properties={filterProperties}
                onFilterChange={onCocktailFilterChange}
              />
            </div>
          </div>

          <div className={`col-8 ${styles.listarea}`}>
            <div className="row mt-3 mb-3">
              <Switch>
                <Route path="/">
                  <div className="col-12">
                    <div className="container">
                      <CocktailList
                        segmentType={segmentType}
                        data={dataResult}
                        query={query}
                        sortProperty={sortProperty}
                        filterProperties={filterProperties}
                      />
                    </div>
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}
