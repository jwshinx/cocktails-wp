import './styles.css'
import IMAGE from './gsw.png'
import LOGO from './logo.svg'
import { Counter } from './components/Counter'

export const App = () => {
  return (
    <>
      <h1>
        Edited 3 React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV} {process.env.name} {process.env.city}{' '}
        {process.env.COLOR}
      </h1>
      <img src={IMAGE} alt="Golden State Warriors" width="200" />
      <img src={LOGO} alt="Golden State Warriors" width="200" />
      <Counter />
    </>
  )
}
