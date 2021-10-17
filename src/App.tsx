import './styles.css'
import IMAGE from './gsw.png'
import LOGO from './logo.svg'

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={IMAGE} alt="Golden State Warriors" width="200" />
      <img src={LOGO} alt="Golden State Warriors" width="200" />
    </>
  )
}