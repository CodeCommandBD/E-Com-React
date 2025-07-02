import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../Assets/e-Logo.jpg'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { useData } from '../Context/AuthContext'
import { CgClose } from 'react-icons/cg'
import { useCart } from '../Context/CartContext'
import { toast } from "react-toastify";

const Navbar = () => {

  
  
  const { isLoggedIn, location , getLocation, dropDown, setDropDown } = useData()


  const {cartItem} = useCart()

  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic'));

  useEffect(() => {
    const sign = JSON.parse(localStorage.getItem('isSignIn'))
    console.log(sign);

    const handleProfilePicChange = () => {
      setProfilePic(localStorage.getItem('profilePic'));
    };
    window.addEventListener('profilePicChanged', handleProfilePicChange);
    return () => {
      window.removeEventListener('profilePicChanged', handleProfilePicChange);
    };
  }, []);

  // ########## DropDown Toggole ##############
  // ########## DropDown Toggole ##############
  // ########## DropDown Toggole ##############

  const DropDownToggle = () => {
    setDropDown(!dropDown)
  }

 

  return (
    <div className='bg-white py-3 shadow-2xl sticky top-0 w-full z-50'>
      <nav className='container flex items-center justify-between'>
        <div className='flex gap-3 items-center'>


          {/* ################## logo ################### */}
          {/* ################## logo ################### */}
          {/* ################## logo ################### */}
          <Link to='/'><img className='w-[70px]' src={logo} alt="" /></Link>

          {/* ################# Location ################### */}
          {/* ################# Location ################### */}
          {/* ################# Location ################### */}

          <div className='location flex items-center gap-1'>
            <MapPin className='text-purple-700 '></MapPin>
            <span className='font-semibold text-purple-600'>{location ?
              <div className='flex gap-1 m-0 p-0'>
                <p> {location.country}, </p>
                <p> {location.town} </p>
              </div>
              : "Add Location"}</span>
            <FaCaretDown className='text-purple-600' onClick={DropDownToggle}></FaCaretDown>
          </div>
        </div>

        {/* ########### DropDownTost ############## */}
        {/* ########### DropDownTost ############## */}
        {/* ########### DropDownTost ############## */}

        {
          dropDown ?
            <div className='w-[230px] h-max shadow-2xl z-50 bg-white fixed top-14 border-2 p-5 border-gray-100 rounded-md'>
              <h1 className='font-semibold text-lg mb-4 flex justify-between items-center text-green-600'>Change Location <span onClick={DropDownToggle}><CgClose></CgClose></span></h1>
              <button onClick={async () => {
                const loadingToastId = toast.info("📍 Detecting your location...", { autoClose: false });
                await getLocation();
                setTimeout(() => {
                  toast.dismiss(loadingToastId);
                  if (location && (location.country || location.state || location.postcode)) {
                    toast.success("Location detected and autofilled!");
                  } else {
                    toast.error("Failed to detect location. Please enable GPS and try again.");
                  }
                }, 1000);
              }} className='bg-purple-500 text-green-400 p-2 rounded-lg font-semibold'>Detect Location</button>
            </div>
            :
            null
        }

        {/* #################### menu section ################## */}
        {/* #################### menu section ################## */}
        {/* #################### menu section ################## */}

        <div className='flex gap-6 items-center'>
          <div className='flex items-center gap-6'>
            <NavLink to='/' className={({ isActive }) =>
              `text-purple-600 font-semibold ${isActive ? 'border-b-3 border-b-green-500 transition-all' : ''}`
            }>Home</NavLink>


            <NavLink to='/product' className={({ isActive }) =>
              `text-purple-600 font-semibold ${isActive ? 'border-b-3 border-b-green-500 transition-all' : ''}`
            }>Product</NavLink>

            <NavLink to='/about' className={({ isActive }) =>
              `text-purple-600 font-semibold ${isActive ? 'border-b-3 border-b-green-500 transition-all' : ''}`
            }>About</NavLink>


            <NavLink to='/contact' className={({ isActive }) =>
              `text-purple-600 font-semibold ${isActive ? 'border-b-3 border-b-green-500 transition-all' : ''}`
            }>Contact</NavLink>
          </div>
          {/* ################## cart  ###################### */}
          {/* ################## cart  ###################### */}
          {/* ################## cart  ###################### */}

          <Link to='/cart' className='relative'>
            <IoCartOutline className='w-7 h-7 text-purple-600 '>
            </IoCartOutline>
            <span className='bg-green-400 px-2 rounded-full absolute -top-3 -right-3 text-purple-700'>{cartItem.length}</span>
          </Link>
          {/* ###############  SignIn #################### */}
          {/* ###############  SignIn #################### */}
          {/* ###############  SignIn #################### */}
          {
            isLoggedIn ?
              <>
                <Link className=' py-1 px-3 rounded-lg text-md text-purple-700 font-semibold' to='/dashboard/user/profile'>
                  <div className='w-[40px] h-[40px] rounded-full border-2 border-purple-700 overflow-hidden'>
                    <img className='w-full h-full' src={profilePic} alt="" />
                  </div>
                </Link>
              </>
              :
              <>
                <Link className='bg-green-400 py-1 px-3 rounded-lg text-md text-purple-700 font-semibold' to='/signin'>SignIn</Link>
              </>
          }

        </div>
      </nav>
    </div>
  )
}

export default Navbar