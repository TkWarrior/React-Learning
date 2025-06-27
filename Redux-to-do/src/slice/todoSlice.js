import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     count:0
// }

// const counterSlice = createSlice({
//     name:"counter",
//     initialState,
//     // both increment and decrement are the actions
//     reducers:{
//         increment : state => {  state.count=state.count+1   },
//         decrement : state => {  state.count=state.count - 1},
//         reset : state => { state.count = 0}
       
//     }
// })

// export const { increment , decrement ,reset} = counterSlice.actions;
// export default counterSlice.reducer;

const initialState = {
    todos:[]
}
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action) => {state.todos.push(action.payload)},
        deleteTodo : (state,action) => {
            console.log(action)
            state.todos = state.todos.filter((todo) => todo.id!=action.payload.id)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;