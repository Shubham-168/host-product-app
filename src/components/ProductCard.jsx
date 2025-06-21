import { Link } from 'react-router-dom'


function ProductCard(props) {

    const {product} = props
    
  return (
    <Link to={`/product/${product.id}`} >
        <div className="w-[200px] h-[300px] bg-transparent rounded-lg border-0 hover:shadow-2xl transition-shadow duration-300 flex flex-col p-3">
            {/* Brand */}
            {product.brand !== undefined ? 
                <div className="text-xs text-gray-500 font-medium mb-1">Brand: {product.brand}</div>
                :
                ""
            }

            {/* Image Container */}
            <div className="w-full h-24 mb-3 overflow-hidden rounded-lg bg-gray-50">
                <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1 h-10 ">{product.title}</h3>

            {/* Price + Rating/Availability */}
            <div className="flex justify-between items-start mb-1">
                <div className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</div>
                <div className="text-right">
                <div className="text-xs text-yellow-500">★ {product.rating}</div>
                <div className={`text-xs font-medium ${product.stock <= 5 ? 'text-red-500' : 'text-green-600'}`}>{product.availabilityStatus}</div>
                </div>
            </div>

            {/* Tags (just above button) */}
            <div className="text-xs flex flex-wrap gap-1 mt-3 mb-1">
                {product.tags.map((tag, idx) => (
                <span key={idx} className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    #{tag}
                </span>
                ))}
            </div>

            {/* Button */}
            <button className="bg-green-600 text-white mt-2 text-xs font-medium py-1.5 rounded-md hover:bg-green-700 w-full">
                View Details
            </button>
        </div>
    </Link>
  )
}

export default ProductCard