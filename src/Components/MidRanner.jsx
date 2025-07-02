import React from 'react'
import banner from '../Assets/e-bg.png'
import { useNavigate } from 'react-router'

const MidRanner = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 md:py-24'>
        <div className='relative container md:rounded-2xl  bg-center h-[550px] md:h-[600px]' style={{background: `url(${banner})`, backgroundAttachment:'fixed', backgroundPosition:'center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div className='absolute top-0 left-0 h-full w-full bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
                <div className='text-center text-white px-4'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Next-Gen Electronics at your Fingertips </h1>
                    <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders</p>
                    <button onClick={()=>navigate('/product')} className='bg-gradient-to-r from-green-600 to-purple-600  text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 cursor-pointer'>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MidRanner