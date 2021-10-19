import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './styles.css'
import IMAGE from './gsw.png'
import LOGO from './logo.svg'

import Segment from './components/segment/Segment'
import { Counter } from './components/Counter'
import Footer from './components/Footer'
import {
  SegmentType,
  SegmentKeyType,
  FirstLetterSegmentKey,
} from './models/cocktail'

export const App = () => {
  const [segmentType, setSegmentType] = useState<SegmentType>('search')
  const [segmentKey, setSegmentKey] = useState<SegmentKeyType>(
    FirstLetterSegmentKey
  )
  const [segmentValue, setSegmentValue] = useState('c')

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
