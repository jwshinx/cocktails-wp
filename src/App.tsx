import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import _ from 'lodash'

import './styles.css'
import IMAGE from './gsw.png'
import LOGO from './logo.svg'

import cocktails from './api/cocktails'
import Segment from './components/segment/Segment'
import { Counter } from './components/Counter'
import Footer from './components/Footer'
import { SearchInput } from './components/ui/SearchInput'
import Sorter from './components/ui/Sorter'
import Filterer from './components/ui/Filterer'
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
        // console.log("+++> cocktails url:", url);
        const { data }: { data: ApiRawCocktailData } = await cocktails.get(url)
        // console.log("+++> cocktails fetched data 6:", data);

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

  console.log(`+++> dataResult:`, dataResult)
  console.log(`+++> query:`, query)
  console.log(`+++> sortProperty:`, sortProperty)

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
          <div className="col-4 sidenav">
            <div className="row mt-4">
              <h2>Cocktails</h2>
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

          <div className="col-8">
            <div className="row mt-3 mb-3">
              <h3>
                {process.env.NODE_ENV} {process.env.name} {process.env.city}{' '}
                {process.env.COLOR}
              </h3>
              <div className="col-3">
                <img src={IMAGE} alt="Golden State Warriors" width="200" />
              </div>

              <div className="col-3">
                <img src={LOGO} alt="Golden State Warriors" width="200" />
              </div>

              <div className="col-3">
                <Counter />
              </div>
              <div className="col-3">
                <div className="well orange">
                  <h4>Dashboard</h4>
                </div>
              </div>
            </div>

            <div className="row mt-3 mb-3">
              <div className="col-3">
                <div className="card card-body bg-light">
                  <h4>Users</h4>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-body bg-light">
                  <p>ketchupp</p>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-body bg-faded">
                  <p>lettuce</p>
                </div>
              </div>
              <div className="col-3">
                <div className="card card-body bg-info">
                  <h4>Bounce</h4>
                  <p>30%</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <div className="card card-body bg-faded">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card card-body bg-warning">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-4">
                <div className="card card-body bg-secondary">
                  <p className="text-danger">Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
            </div>

            <div className="row mt-3 mb-3">
              <Switch>
                <Route path="/age">
                  <div className="col-12">
                    <div className="card card-body">
                      <AgeComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/gender">
                  <div className="col-12">
                    <div className="card card-body">
                      <GenderComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/geo">
                  <div className="col-12">
                    <div className="card card-body">
                      <GeoComponent />
                    </div>
                  </div>
                </Route>
                <Route path="/">
                  <div className="col-12">
                    <div className="card card-body">
                      <HomeComponent />
                    </div>
                  </div>
                </Route>
              </Switch>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="card card-body bg-danger">
                  <Footer />
                </div>
              </div>
              <div className="col-4">
                <div className="card card-body bg-success">
                  <p>Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

function HomeComponent() {
  return <h4>Home</h4>
}

function GeoComponent() {
  return <h4>Geo component</h4>
}

function AgeComponent() {
  return <h4>Age component</h4>
}

function GenderComponent() {
  return <h4>Gender component</h4>
}
