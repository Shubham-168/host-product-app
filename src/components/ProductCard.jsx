import { Link } from 'react-router-dom'


function ProductCard(props) {

    const {product} = props
    
  return (
    <Link to={`/product/${product.id}`} >
        <div className="w-[240px] h-[360px] bg-white rounded-xl shadow-md border hover:shadow-lg transition duration-300 flex flex-col justify-between p-4">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-32 object-contain mb-3"
            />
            <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">{product.title}</h3>
                <p className="text-xs text-gray-500 mb-1">Brand: <span className="font-medium">{product.brand}</span></p>
                <div className="text-xs flex flex-wrap gap-1 mb-2">
                {product.tags.map((tag, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    #{tag}
                    </span>
                ))}
                </div>
                <div className="text-sm text-yellow-500 mb-1">★ {product.rating}</div>
                <div className={`text-xs font-medium mb-1 ${product.stock <= 5 ? 'text-red-500' : 'text-green-600'}`}>
                {product.availabilityStatus}
                </div>
                <div className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</div>
            </div>
            <button className="mt-2 bg-green-600 text-white text-xs font-medium py-1.5 rounded-md hover:bg-green-700 w-full">
                View Details
            </button>
        </div>
    </Link>
  )
}

export default ProductCard