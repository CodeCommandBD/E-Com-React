import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const ProductCards = ({product, isSingle}) => {
  const navigate = useNavigate()

  const singleProductPage = () =>{
    navigate(`/product/${product.id}`)
  }

  // ######## addTo cart ##################
  // ######## addTo cart ##################

  const {cartItem, addTocart} = useCart()

  console.log(cartItem);
  


  return (
    <div className={`border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max ${isSingle ? "scale-110 w-full max-w-[300px] mx-auto" : ""}`}>
        <img onClick={singleProductPage} src={product.images[0]} alt="" className='aspect-square' />
        <h1 onClick={singleProductPage} className='line-clamp-2 p-1 font-semibold text-purple-900'>{product.title}</h1>
        <p className='my-1 text-xl text-purple-900 font-bold '>${product.price}</p>
        <button onClick={()=>addTocart(product)} className='bg-gradient-to-r from-green-500 to-purple-500  px-3 py-2 text-lg font-bold rounded-md text-white flex gap-3 items-center justify-center w-full'> <IoCartOutline className='w-6 h-6'></IoCartOutline> Add To Cart</button>
    </div>
  )
}

export default ProductCards