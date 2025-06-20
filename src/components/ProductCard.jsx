import { Link } from 'react-router-dom'


function ProductCard(props) {
    const {cardDetails} = props
    const {
        id,
        rating,
        price,
        thumbnail,
        availabilityStatus,
        brand,
        title
    } = cardDetails
  return (
    <Link to={`/product/${id}`} >
        <li className='h-100 w-60 bg-white rounded-2xl p-2.5 shadow-lg object-cover hover:shadow-2xl transition-shadow duration-300 m-4' >
            <div className='flex justify-between p-1'>
                <span className='text-gray-600 font-bold text-md font-serif'> {brand} </span>
                <span className='bg-amber-400 rounded-lg h-6 w-10 text-center pt-0.5 text-sm text-white font-black' >  {rating} </span>
            </div>
            <img 
                src={thumbnail}
                className=''
                alt='product-img'
            />
            <p className='text-md font-bold text-blue-500 font-sans' > {title} </p>
            <div className='flex justify-between p-1 mb-2'>
            <p className='text-md text-black w-20 font-bold'> $ <span className='text-red-600 text-xl font-sans' > {price} </span></p>
            <span className= "text-green-400 font-bold text-xl" > {availabilityStatus} </span>
            </div>
            <button className='bg-black rounded-2xl text-white text-md font-bold cursor-pointer ml-7 h-10 w-40 hover:bg-sky-500 '> Get More Details </button>
        </li>
    </Link>
  )
}

export default ProductCard