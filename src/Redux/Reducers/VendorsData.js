import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vendor : []
}

export const vendorSlice = createSlice({
    name: "vendor",
    initialState,
    reducers: {
        addVendor: (state, action) => {
            state.vendor = action.payload
        },
        removeVendor: (state, action) => {
            console.log(action.payload)
            state.vendor = state.vendor.filter(vendor => vendor._id != action.payload)
            console.log(state.vendor)
        }
    
    }
 });

 export const { addVendor, removeVendor } = vendorSlice.actions;
 export default vendorSlice.reducer;