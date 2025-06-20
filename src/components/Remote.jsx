import { useParams } from 'react-router-dom'
import ProductDetails from 'remoteApp/ProductDetails';
import store from '../store/store';

function Remote() {
  const {id} = useParams()

  return (
    <div className=' w-screen mt-20' > 
        <ProductDetails productId={Number(id)} hostStore={store} />
    </div>
  )
}

export default Remote