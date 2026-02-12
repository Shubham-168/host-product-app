import { useNavigate } from 'react-router-dom'

function ProductListCard({ product }) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer flex items-start gap-6 rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
    >
      <div className="w-full max-w-[220px] rounded-xl bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-[220px] w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
        <p className="text-base leading-6 text-gray-600">{product.description}</p>

        <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
            Category: {product.category}
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1">
            ⭐ {product.rating.rate.toFixed(1)} ({product.rating.count})
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-3xl font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-lime-400"
          >
            Buy now
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductListCard
