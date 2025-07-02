import React, { useEffect, useState } from 'react'
import { useData } from '../Context/AuthContext'
import Filter from '../Components/Filter'
import ErrorVideo from '../Assets/LoaderSix.mp4'
import ProductCards from '../Components/ProductCards'
import Pagination from '../Components/Pagination'
import Lottie from 'lottie-react'
import notfound from '../Assets/NotFound2.json'
const Products = () => {
  const { apiData, FetchProductApi } = useData()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [page, setPage] = useState(1)
  useEffect(() => {
    FetchProductApi()
  }, [])

  // ############ Handle Category ############
  // ############ Handle Category ############
  // ############ Handle Category ############

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setBrand("All");
    setSearch('')
  }
  // ############# Handel Brand ##############
  // ############# Handel Brand ##############
  // ############# Handel Brand ##############

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }

  // ###############  Filter Data from ApiData #####################
  // ###############  Filter Data from ApiData #####################
  // ###############  Filter Data from ApiData #####################

  const filterData = apiData?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  )

  // ########## Filtter Brand #################
  // ########## Filtter Brand #################
  // ########## Filtter Brand #################

  const filteredBrands = ["All", ...new Set(
    apiData
      .filter(item => category === 'All' || item.category === category)
      .map(item => item.brand)
  )];

  // ################# Next and Prev Page Handle ##############
  // ################# Next and Prev Page Handle ##############
  // ################# Next and Prev Page Handle ##############

  const pageHandle = (selectedPage) => {
    setPage(selectedPage)
  }

  const dynamicPage = Math.ceil(filterData?.length / 8)




  return (
    <div className='bg-white'>
      <div className='container'>
        <div className='mb-10'>
          {
            apiData?.length > 0 ?
              <div>
                <div className='flex gap-10 py-14'>
                  <Filter
                    search={search}
                    brand={brand}
                    category={category}
                    priceRange={priceRange}
                    setSearch={setSearch}
                    setBrand={setBrand}
                    setCategory={setCategory}
                    setPriceRange={setPriceRange}
                    handleCategoryChange={handleCategoryChange}
                    handleBrandChange={handleBrandChange}
                    filteredBrands={filteredBrands}


                  ></Filter>

                  {
                    filterData?.length > 0 ?
                      <div className='flex flex-col justify-between'>
                        <div className='cardGrid gap-4'>
                          {
                            filterData?.slice(page * 8 - 8, page * 8).map((product, i) => {
                              return <ProductCards key={i}
                                product={product}
                                isSingle={filterData.length === 1}
                              ></ProductCards>
                            })
                          }
                        </div>
                        <Pagination
                          dynamicPage={dynamicPage}
                          pageHandle={pageHandle}
                          page={page}
                        ></Pagination>
                      </div>
                      :
                      <div className='flex justify-center items-center md:h-[600px] w-full mt-10 '>
                        <Lottie animationData={notfound} classID='w-[500px]'></Lottie>
                      </div>
                  }

                </div>

              </div>
              :
              <>
                <div className='flex items-center justify-center h-[600px]'>
                  <video muted autoPlay loop>
                    <source src={ErrorVideo} type='video/mp4' />
                  </video>
                </div>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default Products