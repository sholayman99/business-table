import {configureStore} from "@reduxjs/toolkit";
import productReducer  from "../state-slice/product-slice.js";
import settingReducer from "../state-slice/setting-slice.js";

export default configureStore({
   reducer:{
       product:productReducer,
       settings:settingReducer
   }
})