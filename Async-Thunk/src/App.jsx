import { useEffect } from 'react';
import './App.css'
import {useDispatch , useSelector} from 'react-redux'
import {loadPost } from './slice/postSlice'
function App() {
  const dispatch = useDispatch();

  const {posts,status} = useSelector(state => state.posts)

  useEffect(()=>{
      
    if(status === 'idle'){
        dispatch(loadPost())
      }
  },[])

  console.log({posts})
 
  return (
    <>
      <h1>Async Thunk</h1>
    </>
  )
}

export default App
