import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles.css'
import IMAGE from './gsw.png'
import LOGO from './logo.svg'
import { Counter } from './components/Counter'
import Footer from './components/Footer'

export const App = () => {
  return (
    <>
      <h1>
        Edited 4 React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name} {process.env.city}{' '}
        {process.env.COLOR}
      </h1>
      <img src={IMAGE} alt="Golden State Warriors" width="200" />
      <img src={LOGO} alt="Golden State Warriors" width="200" />
      <Counter />
      <Footer />
    </>
  )
}
