import React, {  useState } from 'react'
import { useData } from '../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import loaderTwo from '../../Assets/loaderTwo.mp4';
import eLogo from '../../Assets/e-Logo.jpg';

const SignIn = () => {
  const navigate = useNavigate()
  const {signIn} = useData()
  const [form, setForm] = useState({
    email:'', password: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const exact = users.find( u=> u.email === form.email && u.password === form.password)
    
    if(exact){
      signIn(exact)
      toast.success('Sign in successful!')
      if(!localStorage.getItem('profilePic')){
        localStorage.setItem('profilePic', eLogo);
      }
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        navigate('/')
      }, 1000)
    }else{
      toast.error('Your email or password is wrong')
    }
  }

  if(loading){
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <video src={loaderTwo} autoPlay loop width={120} />
      </div>
    )
  }

  return (
   <div className="bg-gradient-to-t from-orange-300 font-pop to-pink-300 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-1/2 ">
       
        {/* Right Sign In Form */}
        <div className="w-full p-12">
          <div className="text-right text-sm">
            Don't have an account? 
            <Link to='/signup' className="text-purple-600 font-semibold">Sign up</Link>
          </div>

          <h2 className="text-3xl font-bold mt-6 mb-8 font-pop">SIGN IN</h2>

          

      

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 10-8 0v4m0 0H4m16 0h-4"
                ></path>
              </svg>
              <input
                onChange={handleChange}
                value={form.email}
                name="email"
                type="email"
                placeholder="Example@gmail.com"
                className="flex-1 outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"
                ></path>
              </svg>
              <input
                onChange={handleChange}
                value={form.password}
                name="password"
                type="password"
                placeholder="**********"
                className="flex-1 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md font-semibold"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn