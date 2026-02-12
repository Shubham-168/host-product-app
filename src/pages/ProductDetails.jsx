import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { selectProducts } from '../features/products/productSelectors'

function ProductDetails() {
  const { id } = useParams()
  const products = useSelector(selectProducts)
  const [fallbackProduct, setFallbackProduct] = useState(null)
  const [status, setStatus] = useState('idle')

  const productFromStore = useMemo(
    () => products.find((item) => String(item.id) === id),
    [id, products],
  )

  useEffect(() => {
    if (productFromStore) {
      return
    }

    const fetchProduct = async () => {
      try {
        setStatus('loading')
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)

        if (!response.ok) {
          throw new Error('Unable to fetch this product')
        }

        const data = await response.json()
        setFallbackProduct(data)
        setStatus('succeeded')
      } catch {
        setStatus('failed')
      }
    }

    fetchProduct()
  }, [id, productFromStore])

  const product = productFromStore ?? fallbackProduct

  if (status === 'failed') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 py-10">
          <p className="rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-lg font-medium text-red-700">
            Could not load product details.
          </p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="animate-pulse rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 h-[400px] rounded-xl bg-gray-200" />
            <div className="mb-4 h-8 w-2/3 rounded bg-gray-200" />
            <div className="mb-4 h-6 w-1/3 rounded bg-gray-200" />
            <div className="h-24 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Link
          to="/"
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          ← Back to products
        </Link>

        <section className="mt-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <div className="rounded-xl bg-gray-100 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-[400px] w-full rounded-xl object-contain"
            />
          </div>

          <div className="mt-8 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{product.title}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-lime-100 px-4 py-1.5 text-sm font-medium text-lime-800">
                Category: {product.category}
              </span>
              <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700">
                ⭐ {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
              </span>
            </div>
            <p className="text-4xl font-semibold text-gray-900">${product.price.toFixed(2)}</p>
            <p className="max-w-4xl text-lg leading-8 text-gray-600">{product.description}</p>

            <button
              type="button"
              className="cursor-pointer rounded-full bg-lime-300 px-8 py-3 text-base font-semibold text-gray-900 transition hover:bg-lime-400"
            >
              Buy now
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProductDetails
