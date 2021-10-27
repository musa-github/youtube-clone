import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HttpRequest from "../api_request";
// fatching popular videos 
export const facingVideos = createAsyncThunk(
    "videos/facingData", 
    async()=>{
        const response= await HttpRequest("/videos",{
            params:{
                part:'snippet,contentDetails,statistics',
                chart:'mostPopular',
                regionCode:'BD',
                maxResults:24,
                pageToken: "",    
            },
            })
            return response.data;
        }
)
// fatching videos by search
export const fatchingVideosByCatagory = createAsyncThunk(
    'videos/fatchingVideosByCatagory',
        async(input)=>{
             const response = await HttpRequest('/search',{
                params:{
                    part:"snippet",
                    pageToken:"",
                    q:input,
                    maxResults:20

                }
            })
            return response.data;
})

// fatching related videos by video id 
export const fatchingRelatedVideos = createAsyncThunk(
    'relatedVideos/fatchingRelatedVideos',
    async(id)=>{
      const response=   await HttpRequest('/search', {
            params: {
               part: 'snippet',
               relatedToVideoId: id,
               maxResults: 20,
               type: 'video',
            },
         })
         return response.data
    }
);

const initialState = {
    videos:[],
    loading:false,
    error:"",
    searchVideos:[],
    relatedVideos:[]
};
const asyncAction = createSlice({
   name:"asyncAction",
    initialState,

    reducers:{

    },
    extraReducers:{
        // fatching popular videos 
        [facingVideos.pending]:(state)=>{
        return {...state,loading:true}
        },
        [facingVideos.fulfilled]:(state,{payload})=>{
         
            return {...state,videos:payload}
        }  ,
       
        [facingVideos.rejected]:(state)=>{
           return {...state, error:'Something went wrong',loading:false}
        },
        // fatching videos by catagory
        [fatchingVideosByCatagory.pending]:(state)=>{
           return {...state,loading:true}
        },
        [fatchingVideosByCatagory.fulfilled]:(state,{payload})=>{
           return {...state,searchVideos:payload}
        },
        [fatchingVideosByCatagory.rejected]:(state)=>{
           return {...state,error:'Something went wrong',loading:false}
        },
        // fatching related videos by id
        [fatchingRelatedVideos.pending]:(state)=>{
            return {...state, loading:true}
        },

        [fatchingRelatedVideos.fulfilled]:(state,action)=>{
            return {...state, relatedVideos:action.payload}
        },
        [fatchingRelatedVideos.rejected]:(state)=>{
            return {...state, error:"Something went wrong",loading:false}
        }
    }

})

export default asyncAction.reducer