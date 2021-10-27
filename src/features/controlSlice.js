import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    aside:true
}

const controlSlice = createSlice({
    name:'control',
    initialState,

    reducers:{

        controlAside:(state,action)=>{
            state.aside = action.payload
        }
    }
})

export const {controlAside} =controlSlice.actions;
export default controlSlice.reducer