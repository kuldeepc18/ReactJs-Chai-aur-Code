import { useContext } from 'react'
import './App.css'
import Counter from './components/counter'
import { CounterContext } from './context/Counter'

function App() {
  
  const counterState = useContext(CounterContext)

  return (
    <>
      <div className='App'>
        <h1>Count is {counterState.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App
