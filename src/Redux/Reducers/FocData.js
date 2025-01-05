import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    focData : []
}

const focSlice = createSlice({
    name: "foc",
    initialState,
    reducers: {
        addfocData : (state, action) =>{
            state.focData = action.payload
        },
        removefocData : (state, action) =>{
            state.focData = state.focData.filter(foc => foc._id!== action.payload)
        }
    },
})

export const {addfocData, removefocData} = focSlice.actions

export default focSlice.reducer