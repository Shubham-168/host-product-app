import {configureStore} from "@reduxjs/toolkit"

import userReducer from "./userSlice"

const store = configureStore({
    reducer:{
        products: userReducer
    }
})

export default store

