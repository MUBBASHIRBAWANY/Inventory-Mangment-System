import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../Reducers/sidebarReducer";
import  userSlice  from "../Reducers/UserReduser";
import userValid from "../Reducers/isUserValid"
import vendorSlice  from "../Reducers/VendorsData";
import  clientSlice  from "../Reducers/ClientData";
import productSlice  from "../Reducers/ProductsData";
import focSlice from '../Reducers/FocData'
import purchaseOrderSlice from '../Reducers/PurchaseOrder.js'
import sidebarOptions from '../Reducers/SiderBarOtionFalse.js'
export const store = configureStore({
    reducer : {
        isSideBar : sidebarReducer,
        userData : userSlice,
        userValid : userValid,
        vendorData : vendorSlice,
        clientData : clientSlice,
        productData : productSlice,
        focData : focSlice,
        purchaseOrderSlice : purchaseOrderSlice,
        sidebarOptions : sidebarOptions
        
    }
})