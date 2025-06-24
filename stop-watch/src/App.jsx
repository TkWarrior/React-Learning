import { useState,useRef} from 'react'
import './App.css'

function App() {
  //useRef Hoook is used to preserve the value during re-render
  // when we have to save the value during re-render and doesn't want it to get display on view during re-render
  //when we want to preserve the value and doesn't want the value to get lost in that case we will use useRef Hook
  // useRef facilitates direct interaction with DOM elements, enabling imperative operations such as focusing elements
  // and we have to expose ref component from parent then we'll forwardref
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inputref = useRef();


  const onStartClick = () => {
    //count is getting udated every 200ms
    ref.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 200);
    console.log(ref.current);
  };

  const onStopClick = () => {
    clearInterval(ref.current);
    console.log(ref.current);
  };

  const onFocusClick = () => {
    inputref.current.focus();
  };
  return (
    <>
      <input type="text" placeholder="search something" ref={inputref} />
      <button onClick={onFocusClick}>Focus on Input</button>
      <h1>Count - {count}</h1>
      <button onClick={onStartClick}>start</button>
      <button onClick={onStopClick}>stop</button>
      
    </>
  );
}

export default App
