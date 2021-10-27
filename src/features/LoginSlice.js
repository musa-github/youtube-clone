import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   accessToken:"",
   user:{},
   loading:false,
}

export const loginSlice = createSlice({
    name:"auth",
    initialState,

    reducers:{
        getAccessToken: (state,action)=>{
           state.accessToken = action.payload
          
           
        },
        user:(state,action)=>{
            state.user = action.payload
        },
        loading:(state,action)=>{
            state.loading = action.payload
        }
    }
})

export const {getAccessToken,loading,user}=loginSlice.actions
export default loginSlice.reducer