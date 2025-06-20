import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';

function Home() {
  const {productsList} = useSelector(state => state.products)

  return (
    <>
      <div className="p-8 bg-neutral-100 min-h-screen mt-18">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 ">All Products</h2>
        <div className="flex flex-wrap  gap-6 items-center justify-center">
          {productsList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home