import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/counterSlice'

const App = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h4>Set up and use Redux Toolkit with React-Redux - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>Increment +3</button>
      <span className='counter'>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App;