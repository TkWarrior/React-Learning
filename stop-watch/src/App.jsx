import { useState,useRef} from 'react'
import './App.css'

function App() {
  //useRef Hoook is used to preserve the value during re-render
  // when we have to save the value during re-render and doesn't wwant it to get display on view during re-render
 const [count, setCount] = useState(0);
 const ref =  useRef();

 const onStartClick = () =>{
    //count is getting udated every 200ms
    ref.current = setInterval(()=>{
          setCount(count=>count+1);
    },200)
     console.log(ref.current);
 }

 const onStopClick = ()=> {
    clearInterval(ref.current);
     console.log(ref.current);
 }
  return (
    <>
     <h1>Count - {count}</h1>
     <button onClick={onStartClick}>start</button>
     <button onClick={onStopClick}>stop</button>
    </>
  )
}

export default App
