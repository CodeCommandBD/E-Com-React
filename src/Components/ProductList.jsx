import React from 'react'
import { useNavigate } from 'react-router';
import { useCart } from '../Context/CartContext';

const ProductList = ({ product }) => {
    console.log(product);
    const navigate = useNavigate()
    const { addTocart } = useCart();

    return (
        <div className='mt-2 rounded-md'>
            <div className='bg-purple-200 p-2 flex gap-7 items-center rounded-lg'>
                <div className='bg-purple-300 rounded-lg'>
                    <img src={product.images[0]} alt="" className='w-[200px] rounded-md cursor-pointer' onClick={() => navigate(`/product/${product.id}`)} />
                </div>
                <div className=''>
                    <h2 className='font-bold text-xl line-clamp-3 hover:text-purple-700 text-purple-900'>{product.title}</h2>
                    <h1 className='mt-2 font-semibold flex gap-2 items-center text-4xl text-purple-900'>${product.price} <span className='font-semibold text-lg '> ({product.discountPercentage}% Off)</span></h1>
                    <div className="flex gap-2 mt-2">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">{product.availabilityStatus}</span>
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">⭐ {product.rating}</span>
                    </div>
                    <button
                        className="bg-purple-900 py-2 px-3 rounded-lg text-md font-bold text-white mt-4 cursor-pointer"
                        onClick={() => {
                            addTocart(product);
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductList