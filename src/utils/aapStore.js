import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import gallaryReducer from "./gallarySlice";



const appStore= configureStore({
    reducer:{
        user : userReducer,
        gallery:gallaryReducer

    },
});

export default appStore;