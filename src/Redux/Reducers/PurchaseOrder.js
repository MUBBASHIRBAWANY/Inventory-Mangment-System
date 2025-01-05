import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        PurchaseOrderData :[]
};

const purchaseOrderSlice = createSlice({
    name: "purchaseOrder",
    initialState,
    reducers: {
        addPurchaseOrderData : (state, action) => {
            state.PurchaseOrderData = action.payload
        },
        removePurchaseOrderData : (state, action) =>{
            state.PurchaseOrderData = state.PurchaseOrderData.filter(purchaseOrder => purchaseOrder._id!== action.payload)
        }
    }
 });

 export const { addPurchaseOrderData, removePurchaseOrderData } = purchaseOrderSlice.actions;
 export default purchaseOrderSlice.reducer;