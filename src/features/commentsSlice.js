
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpRequest from "../api_request";
// fatching channel
export const facingComments = createAsyncThunk(
    "comments/facingComments", 
    async(id)=>{
        const response = await HttpRequest("/commentThreads", {
            params: {
              part: "snippet",
              videoId: id,
            },
          });
         
            return response.data
        }
)


const initialState = {
  comments:[],
    loading:false,
    error:"",
   
};
const getComments = createSlice({
   name:"getChannelData",
    initialState,

    reducers:{

    },
    extraReducers:{
        // fatching channel data
        [facingComments.pending]:(state)=>{
        return {...state,loading:true}
        },
        [facingComments.fulfilled]:(state,action)=>{
         
            return {...state,comments:action.payload}
        }  ,
       
        [facingComments.rejected]:(state)=>{
           return {...state, error:'Something went wrong',loading:false}
        },
      
       
    }

})

export default getComments.reducer





    
    
  
 
 