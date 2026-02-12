import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

export default store
