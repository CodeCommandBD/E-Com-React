import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ErrorVideo from '../Assets/LoaderSix.mp4'
import BreadCrums from '../Components/BreadCrums'
import { IoCarOutline, IoCartOutline } from 'react-icons/io5'
import loaderThree from '../Assets/loaderTwo.mp4'
import { useCart } from '../Context/CartContext'

const SingleProduct = () => {
  const param = useParams()
  const [singleProduct, setSingleProduct] = useState('')
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { addTocart } = useCart()

  const getSingleProduct = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/products/${param.id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json()
      setTimeout(() => {
        setSingleProduct(data)
        setLoading(false)
      }, 700)
    }
    catch (error) {
      console.error("error", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [param.id])

  const orginalPrice = Math.round(singleProduct.price + (singleProduct.price * singleProduct.discountPercentage / 100))

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <video src={loaderThree} autoPlay loop muted style={{width: '100px'}} />
      </div>
    )
  }

  return (
    <div>
      {singleProduct ? (
        <div className='px-4 pb-4 md:px-0  my-10'>
          <BreadCrums title={singleProduct.title}></BreadCrums>
          <div className='container'>
            <div className=' grid grid-cols-2 gap-10 mt-20'>

              {/* ############ product image ############# */}
              {/* ############ product image ############# */}
              <div className='w-full'>
                <img src={singleProduct.images[0]} alt="" className='rounded-2xl w-full object-fill' />
              </div>
              {/*############ product details ############## */}
              {/*############ product details ############## */}
              <div className='flex flex-col gap-6'>
                <h1 className='md:text-3xl font-bold text-purple-900'>{singleProduct.title}</h1>
                <div className='text-purple-400'>{singleProduct.brand?.toUpperCase()} / {singleProduct.category?.toUpperCase()} / {singleProduct.sku}</div>
                <p className='text-purple-600 font-bold text-2xl flex items-center justify-start gap-3'>${singleProduct.price} <span className='text-green-600 line-through'> ${orginalPrice}</span>
                  <span className='py-2 px-4 bg-purple-900 text-white rounded-lg'> {Math.round(singleProduct.discountPercentage)}% Discount</span>
                </p>
                <p className='font-semibold text-purple-400'>{singleProduct.description}</p>
                {/* ########### Quantity Selector ################ */}
                {/* ########### Quantity Selector ################ */}
                <div className='flex items-center gap-4'>
                  <label htmlFor="" className='text-md font-medium text-purple-800'>Quantity: </label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    className='w-20 border-2 border-green-500 rounded-lg px-3 py-1 focus:outline-none focus:ring-purple-500'
                  />
                </div>
                {/* ########### Add to Cart ################# */}
                {/* ########### Add to Cart ################# */}
                <div className='flex gap-4 mt-4'>
                  <button
                    className='px-6 gap-2 py-2 text-lg bg-purple-600 text-white flex items-center rounded-lg font-semibold'
                    onClick={() => addTocart(singleProduct, quantity)}
                  >
                    <IoCartOutline className='w-6 h-6'></IoCartOutline> Add to Cart
                  </button>
                </div>
              </div>


            </div>

          </div>
        </div>
      )
        :
        (
          <div className='flex items-center justify-center h-screen'>
            <video muted autoPlay loop>
              <source src={ErrorVideo} type='video/mp4' />
            </video>
          </div>
        )}
    </div>
  )
}

export default SingleProduct