import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client : []
}

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        addClient: (state, action) => {
            state.client = action.payload
        },
        removeClient : (state, action) =>{
            state.client = state.client.filter(client => client._id!== action.payload)
        }
    }
 });


 export const  {addClient, removeClient } = clientSlice.actions
 export default clientSlice.reducer