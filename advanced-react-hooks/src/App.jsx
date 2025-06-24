import { useState ,useReducer} from 'react'

import './App.css'

function App() {
  
  // useReducer Hook - it returns the one single state which have all the stateful values
  // Example - counter using useReducer hook

  const initialState = {
    count:0
  }
  
  // const[state , dispatch] = useReducer(reducerFun , initialState)
  
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      case "RESET":
        return {
          ...state,
          count: 0
        }
      default:
        return state;
    }
  };
  const onIncClick = () =>{
      countDispatch({type:"INCREMENT"})
  }

  const onDecClick = () => {
      countDispatch({type:"DECREMENT"})
  }

  const onResetClick = () => {
    countDispatch({type:"RESET"})
  }
  const [{count}, countDispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <h1>Count - {count}</h1>
      <span><button onClick={onIncClick}>Increment</button><button onClick={onDecClick}>Decrement</button><button onClick={onResetClick}>Reset</button></span>
    </>
  )
}

export default App
