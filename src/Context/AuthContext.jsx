import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState([])
  const [dropDown, setDropDown] = useState(false)
  const [location, setLocation] = useState()


  // ############## SIGNUP  SIGNIN  SIGNOUT  SETUP ##################
  // ############## SIGNUP  SIGNIN  SIGNOUT  SETUP ##################
  // ############## SIGNUP  SIGNIN  SIGNOUT  SETUP ##################

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem('isSignIn')) || false
  )
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('user')) || null
  )


  const signIn = (userData) => {
    setIsLoggedIn(true)
    setUser(userData)
    localStorage.setItem('isSignIn', true)
    localStorage.setItem('user', JSON.stringify(userData))
    console.log();

  }

  const signOut = () => {
    setIsLoggedIn(false)
    setUser(null)
    localStorage.removeItem('isSignIn')

  }


  // ############## LOCATION SETUP #################
  // ############## LOCATION SETUP #################
  // ############## LOCATION SETUP #################

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try {
        const location = await fetch(url)
        const exactLocation = await location.json()
        setLocation(exactLocation.address)
        setDropDown(false)

      } catch (error) {
        console.error("error", error);
      }

    })
  }
  useEffect(() => {
    getLocation()
  }, [])

  // #################### Product Data Fetch #######################
  // #################### Product Data Fetch #######################
  // #################### Product Data Fetch #######################


  const FetchProductApi = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://dummyjson.com/products?limit=150&select=title,price,description,category,rating,images,brand,discountPercentage,stock,sku,tags')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      setApiData(data.products)

    } catch (error) {
      console.error('error', error)
    } finally {
      setIsLoading(false)
    }

  }

  // ################ Singel Category ################ 
  // ################ Singel Category ################ 
  // ################ Singel Category ################ 


  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((elem) => {
      return elem[property]
    })
    newVal = ["All",...new Set(newVal)]
    return newVal
  }

  const categoryData = useMemo(() => getUniqueCategory(apiData, "category"), [apiData]);
  const BrandData = useMemo(() => getUniqueCategory(apiData, "brand"), [apiData]);
  


  // ################ Return ##################
  // ################ Return ##################
  // ################ Return ##################

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLoggedIn, user, location, getLocation, dropDown, setDropDown, FetchProductApi, apiData, isLoading,categoryData, BrandData }}>
      {children}
    </AuthContext.Provider>
  )
}

// ################### Export useContext with Custom Hook ################

export const useData = () => useContext(AuthContext)