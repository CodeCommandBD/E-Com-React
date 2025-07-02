import React from 'react'
import { useNavigate } from 'react-router'

const BreadCrums = ({title}) => {
    const navigate = useNavigate()
  return (
    <div className='container'>
        <h1 className='text-xl text-purple-400 font-semibold'>
            
            <span className='cursor-pointer' onClick={()=>navigate('/')}>Home </span>
             /
            <span className='cursor-pointer' onClick={()=>navigate('/product')}> product </span> 

            /
            <span className='cursor-pointer'> {title}</span>

        </h1>
    </div>
  )
}

export default BreadCrums