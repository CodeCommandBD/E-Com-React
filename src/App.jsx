import Navbar from './Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import {  AuthContextProvider } from './Context/AuthContext'

const App = () => {

  return (
    <div>
      <AuthContextProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </AuthContextProvider>
    </div>
  )
}

export default App