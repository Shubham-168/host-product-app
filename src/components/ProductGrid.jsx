import ProductCard from './ProductCard'
import ProductListCard from './ProductListCard'
import ProductSkeleton from './ProductSkeleton'
import ViewToggle from './ViewToggle'

function ProductGrid({ products, totalProducts, status, viewMode, onChangeView }) {
  const isGrid = viewMode === 'grid'

  return (
    <section className="flex h-full flex-col overflow-hidden">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-medium text-gray-500 md:text-4xl">
          Showing <span className="font-semibold text-gray-900">"{products.length} results"</span> from{' '}
          {totalProducts}
        </h2>
        <ViewToggle viewMode={viewMode} onChangeView={onChangeView} />
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        <div className={isGrid ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4' : 'flex flex-col gap-6'}>
          {status === 'loading'
            ? Array.from({ length: 8 }).map((_, index) => <ProductSkeleton key={index} />)
            : products.map((product) =>
                isGrid ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  <ProductListCard key={product.id} product={product} />
                ),
              )}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
