import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProductGrid from '../components/ProductGrid'
import {
  categoryToQueryMap,
  fetchProducts,
  queryToCategoryMap,
  setActiveCategory,
} from '../features/products/productSlice'
import {
  selectActiveCategory,
  selectCategoryCounts,
  selectFilteredProducts,
  selectProductError,
  selectProducts,
  selectProductStatus,
} from '../features/products/productSelectors'

function LandingPage() {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [viewMode, setViewMode] = useState('grid')

  const products = useSelector(selectProducts)
  const filteredProducts = useSelector(selectFilteredProducts)
  const activeCategory = useSelector(selectActiveCategory)
  const categoryCounts = useSelector(selectCategoryCounts)
  const status = useSelector(selectProductStatus)
  const error = useSelector(selectProductError)

  useEffect(() => {
    const queryCategory = searchParams.get('category')
    const mappedCategory = queryToCategoryMap[queryCategory]

    if (mappedCategory && mappedCategory !== activeCategory) {
      dispatch(setActiveCategory(mappedCategory))
    }
  }, [activeCategory, dispatch, searchParams])

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [dispatch, status])

  const handleCategoryChange = (categoryValue) => {
    dispatch(setActiveCategory(categoryValue))

    setSearchParams({
      category: categoryToQueryMap[categoryValue],
    })
  }

  if (status === 'failed') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <p className="rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-lg font-medium text-red-700">
          {error}
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="grid h-[calc(100vh-80px)] grid-cols-1 gap-6 overflow-hidden px-6 py-6 lg:grid-cols-[260px_1fr]">
        <Sidebar
          activeCategory={activeCategory}
          categoryCounts={categoryCounts}
          onCategoryChange={handleCategoryChange}
        />
        <ProductGrid
          products={filteredProducts}
          totalProducts={products.length}
          status={status}
          viewMode={viewMode}
          onChangeView={setViewMode}
        />
      </div>
    </div>
  )
}

export default LandingPage
