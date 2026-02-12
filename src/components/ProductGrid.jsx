import ProductCard from './ProductCard'
import ProductSkeleton from './ProductSkeleton'

function ProductGrid({ products, totalProducts, status }) {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-4xl font-medium text-gray-500">
          Showing <span className="font-semibold text-gray-900">"{products.length} results"</span> from{' '}
          {totalProducts}
        </h2>
        <div className="hidden items-center overflow-hidden rounded-lg border border-gray-300 bg-white sm:flex">
          <button className="bg-lime-300 px-3 py-2 text-gray-900">▦</button>
          <button className="px-3 py-2 text-gray-500">☰</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {status === 'loading'
          ? Array.from({ length: 8 }).map((_, index) => <ProductSkeleton key={index} />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  )
}

export default ProductGrid
