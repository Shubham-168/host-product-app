import { createSelector } from '@reduxjs/toolkit'

const selectProductState = (state) => state.products

export const selectProducts = createSelector(
  [selectProductState],
  (productsState) => productsState.products,
)

export const selectFilteredProducts = createSelector(
  [selectProductState],
  (productsState) => productsState.filteredProducts,
)

export const selectActiveCategory = createSelector(
  [selectProductState],
  (productsState) => productsState.activeCategory,
)

export const selectCategoryCounts = createSelector([selectProducts], (products) =>
  products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] ?? 0) + 1
    return acc
  }, {}),
)

export const selectProductStatus = createSelector(
  [selectProductState],
  (productsState) => productsState.status,
)

export const selectProductError = createSelector(
  [selectProductState],
  (productsState) => productsState.error,
)
