import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo} from "./slice/todoSlice";
// import { decrement, increment, reset } from './slice/todoSlice';
import { v4 as uuid } from "uuid";
function App() {
  const dispatch = useDispatch();

  const [input, setInput] = useState();

  const { todos } = useSelector((state) => state.todos);

  const onAddClick = () => {
    dispatch(
      addTodo({
        id: uuid(),
        todo: input,
      })
    );
    setInput('')
  };
  const onDeleteClick = (id) => {
      dispatch(
        deleteTodo({
          id:id
        })
      );
  }
  console.log(todos);
  // const {count} = useSelector((state) => state.counter)
  // console.log(count)
  // const onIncrementClick = () =>{
  //     dispatch(increment())
  // }

  // const onDecrementClick = () =>{
  //     dispatch(decrement())
  // }

  // const onResetClick = () => {
  //   dispatch(reset())
  // }
  return (
    <>
      {/* <h1>Counter - {count}</h1>
      <button onClick={onIncrementClick}>Increment </button>
      <button onClick={onDecrementClick}>Decrement </button>
      <button onClick={onResetClick}>Reset</button> */}
      <h1>To Do</h1>
      <input
        type="text"
        value={input}
        placeholder="Add to Do"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onAddClick}>Add To Do</button>
      {
        todos?.length>0 && todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.todo}
              <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
            </div>
          );
          
        })
      }
    </>
  );
}

export default App;
