import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SignUp = () => {
    const [form,setForm] = useState({
        name:'', email:'', password:'', confirmPassword:'', admin:'', 
    })
    const navigate = useNavigate();

    const handleChange =(e)=> {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || []
        const exact = users.find(u=> u.email === form.email)

        if(exact){
            toast.error('This email already registered')
            return
        }

        users.push(form)
        localStorage.setItem('users',JSON.stringify(users))
        toast.success('Sign up successful! Now sign in.')
        navigate('/signin')
    }
    return (
        <div>
            <div className="bg-gradient-to-t from-orange-300 to-pink-300 min-h-screen flex items-center justify-center font-pop">
                <div className="bg-white rounded-xl shadow-xl w-1/2">
                    

                    {/* Right Sign Up Form */}
                    <div className="w-full p-12">
                        <div className="text-right text-sm">
                            Already have an account? <Link to='/signin' className="text-purple-600 font-semibold">Sign in</Link>
                        </div>

                        <h2 className="text-3xl font-bold mt-6 mb-8">CREATE ACCOUNT</h2>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
                                <input
                                    onChange={handleChange}
                                    value={form.name}
                                    name='name'
                                    type="text"
                                    placeholder="First Name"
                                    className="flex-1 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
                                <input
                                    onChange={handleChange}
                                    value={form.email}
                                    name='email'
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
                                <input
                                    onChange={handleChange}
                                    value={form.password}
                                    name='password'
                                    type="password"
                                    placeholder="Password"
                                    className="flex-1 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
                                <input
                                    onChange={handleChange}
                                    value={form.confirmPassword}
                                    name='confirmPassword'
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="flex-1 outline-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md font-semibold"
                            >
                                SIGN UP
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp