import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative mb-4 rounded-xl bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-[260px] w-full rounded-xl object-contain"
          loading="lazy"
        />
        <span className="absolute right-3 top-3 rounded-full bg-lime-200 px-2 py-1 text-xs font-semibold text-lime-900">
          NEW
        </span>
        <span className="absolute bottom-3 right-3 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs font-semibold text-gray-700">
          ⭐ {product.rating.rate.toFixed(1)}
        </span>
      </div>

      <h3 className="min-h-14 overflow-hidden text-2xl font-semibold leading-7 text-gray-900 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
        {product.title}
      </h3>

      <div className="mt-4 flex items-center justify-between gap-2">
        <p className="text-2xl font-semibold text-gray-900">${product.price.toFixed(2)}</p>
        <span className="cursor-pointer text-lg font-medium text-gray-900 transition hover:text-black">
          Buy now ↗
        </span>
      </div>
    </article>
  )
}

export default ProductCard
