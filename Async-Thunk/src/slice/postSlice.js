import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts:[],
    status:'idle'
}
export const loadPost = createAsyncThunk('post/loadPost', async() =>{
    try{
        const data = await axios.get('https://dummyjson.com/posts');
        return data;
    }catch(err){
        return err;
    }
})

/*create asynce thunk will return the promise which have three type 
    1) pending
    2)fulfilled
    3) rejected */

export const postSlice = createSlice({
   
    name:'post',
    initialState,
    reducers:{},
    
    extraReducers:builder => {
       
        builder.addCase(loadPost.pending,(state) =>{
            state.status = "loading"
        } )
        .addCase(loadPost.fulfilled, (state,action)=>{
            state.status = 'fulfilled',
            state.posts = action.payload;
        })
        .addCase(loadPost.rejected, (state) => {
            state.status = 'rejected'
        })
    }
    })
            
export default postSlice.reducer; 
    
