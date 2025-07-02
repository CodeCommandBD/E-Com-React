import React from 'react'
import { useData } from '../Context/AuthContext'

const Filter = ({ handleBrandChange, handleCategoryChange, setPriceRange, setSearch, priceRange, category, brand, search, filteredBrands,setCategory,setBrand }) => {
  const { categoryData, BrandData } = useData();

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setCategory("All")
    setBrand("All")
  }

  return (
    <div className='bg-gray-100  p-4 rounded-md h-max'>
      <input
        onChange={handleSearchChange}
        value={search}
        className='p-2 rounded-lg w-full border-2 border-purple-700'
        type="text"
        placeholder='Search...' />

      {/*###### Category data ######## */}
      {/*###### Category data ######## */}
      {/*###### Category data ######## */}

      <h1 className='mt-5 font-semibold text-xl text-purple-900'>Category</h1>
      <div className='flex flex-col gap-2 mt-3'>
        {
          categoryData?.map((categoryItem, i) => {
            return (
              <div key={i} className='flex items-center gap-2'>
                <input
                  onChange={handleCategoryChange}
                  value={categoryItem}
                  checked={category === categoryItem}
                  className='accent-purple-500'
                  type="checkbox"
                  name=""
                />
                <button className='text-purple-900 text-nowrap text-lg capitalize '>{categoryItem}</button>
              </div>

            )
          })
        }
      </div>


      {/* ############ Brand ################# */}
      {/* ############ Brand ################# */}
      {/* ############ Brand ################# */}
      <h1 className='mt-5 font-semibold text-xl text-purple-900'>Brand</h1>
      <select
        value={brand}
        onChange={handleBrandChange}
        name=""
        id=""
        className='no-scrollbar bg-white w-full p-2 border-purple-900 border-2 rounded-md mt-3 text-purple-900
      '>
        {
          filteredBrands?.map((brandItem, i) => {
            return (
              <option 
              className='text-purple-900 bg-white hover:bg-purple-100 text-lg' 
              value={brandItem}
              key={i}>{brandItem}</option>

            )
          })
        }
      </select>

      {/* ########## Price Range ############## */}
      {/* ########## Price Range ############## */}
      {/* ########## Price Range ############## */}

      <h1 className='mt-5 font-semibold text-xl text-purple-900'>Price Range</h1>
      <div className=' p-2 border-purple-900  mt-3 text-purple-900 flex flex-col justify-start items-start'>
        <label className='text-nowrap' htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <input className="mt-3 range w-full  accent-purple-900"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          min="0"
          max="5000"
          type='range'
          step={10}

        />

        <button onClick={() => { setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0, 5000]); }} className='mt-3 w-full px-3 py-2 text-lg font-bold rounded-md text-white bg-purple-900'>Reset Filters</button>
      </div>


    </div>
  )
}

export default Filter