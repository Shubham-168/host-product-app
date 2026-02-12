import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const CATEGORY_OPTIONS = [
  { label: 'Female', value: "women's clothing", query: 'women' },
  { label: 'Male', value: "men's clothing", query: 'men' },
  { label: 'Electronics', value: 'electronics', query: 'electronics' },
  { label: 'Jewelry', value: 'jewelery', query: 'jewelry' },
]

export const queryToCategoryMap = CATEGORY_OPTIONS.reduce((acc, option) => {
  acc[option.query] = option.value
  return acc
}, {})

export const categoryToQueryMap = CATEGORY_OPTIONS.reduce((acc, option) => {
  acc[option.value] = option.query
  return acc
}, {})

const filterByCategory = (products, category) =>
  products.filter((product) => product.category === category)

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products')

  if (!response.ok) {
    throw new Error('Unable to fetch products')
  }

  return response.json()
})

const initialState = {
  products: [],
  filteredProducts: [],
  activeCategory: "women's clothing",
  status: 'idle',
  error: null,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
      state.filteredProducts = filterByCategory(state.products, action.payload)
    },
    filterProducts: (state, action) => {
      state.filteredProducts = filterByCategory(state.products, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
        state.filteredProducts = filterByCategory(action.payload, state.activeCategory)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Something went wrong'
      })
  },
})

export const { setActiveCategory, filterProducts } = productSlice.actions
export default productSlice.reducer
