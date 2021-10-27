
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpRequest from "../api_request";
// fatching channel
export const facingChannel = createAsyncThunk(
    "channel/facingChannel", 
    async(channelId)=>{
      const response =await HttpRequest("/channels", {
            params: {
              part: "contentDetails,statistics,snippet",
              id: channelId,
            },
          });
         
            return response.data
        }
)


const initialState = {
   channel:[],
    loading:false,
    error:"",
   
};
const getChannelData = createSlice({
   name:"getChannelData",
    initialState,

    reducers:{

    },
    extraReducers:{
        // fatching channel data
        [facingChannel.pending]:(state)=>{
        return {...state,loading:true}
        },
        [facingChannel.fulfilled]:(state,action)=>{
         
            return {...state,channel:action.payload}
        }  ,
       
        [facingChannel.rejected]:(state)=>{
           return {...state, error:'Something went wrong',loading:false}
        },
      
       
    }

})

export default getChannelData.reducer





    
    
  
 
 