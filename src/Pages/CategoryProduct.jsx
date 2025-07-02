import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router'
import loading from '../Assets/loaderTwo.mp4'
import { ChevronLeft } from 'lucide-react'
import ProductList from '../Components/ProductList'



const CategoryProduct = () => {
    const [ search, setSearch ] = useState([])
    const navigate = useNavigate()
    const parems = useParams()
    const category = parems.category
    

    const CategoryData = async () => {

        try{
            const response = await fetch(`https://dummyjson.com/products/category/${category}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
            const data = await response.json()
            setSearch(data.products)
           
            
            
            
        } catch (error) {
            console.error("error", error)
        }
        
    }

    useEffect(()=>{
        CategoryData()
    },[])

  return (
    <div>
        
        {
            search.length > 0 ? 
            
            <div className='bg-white my-10 '>
                <div className='container '>
                    <button onClick={()=>navigate('/')} className='bg-purple-900 mb-5 text-white px-3 py-2 rounded-lg flex gap-2 items-center cursor-pointer'><ChevronLeft></ChevronLeft>Back</button>
                    {
                        search.map((product, i)=>{
                            return (
                                <ProductList key={i} product={product} id={i}>

                                </ProductList>
                            )
                        })
                    }
                </div>
            </div>
            :

            <div className='flex items-center justify-center h-[500px]'>
                <video muted autoPlay loop>
                    <source src={loading} type='video/mp4'/>
                </video>
            </div>
        }
    </div>
  )
}

export default CategoryProduct