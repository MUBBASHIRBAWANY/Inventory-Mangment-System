import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isValid: false,
}

const userValid = createSlice({
    name: "userValid",
    initialState,
    reducers: {
        usevalid : (state) =>{
            state.isValid = true
        },
        userValidFales : (state) =>{
            state.isValid = false
        }
    }

})


export const {usevalid, userValidFales} = userValid.actions

export default userValid.reducer