import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Products from './Pages/Products.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Cart from './Pages/Cart.jsx';
import Home from './Pages/Home.jsx';
import SignIn from './Pages/Signup_Loging/SignIn.jsx';
import SignUp from './Pages/Signup_Loging/SignUp.jsx';
import UserProfile from './Components/Client/UserProfile.jsx';
import UserProtect from './Routers/UserProtect.jsx';
import { ErrorBoundary } from './Error/ErrorBoundary.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';
import { CartContextProvider } from './Context/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryProduct from './Pages/CategoryProduct.jsx';
// import SignOut from './Pages/Signup_Loging/SignOut.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorBoundary></ErrorBoundary>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/product',
        element: <Products></Products>
      },
      {
        path: '/category/:category',
        element: <CategoryProduct></CategoryProduct>
      },
      {
        path: '/product/:id',
        element: <SingleProduct></SingleProduct>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },

      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      // PROTECTED ROUTE FOR CART
      {
        element: <UserProtect />,
        children: [
          { path: '/cart', element: <Cart /> }
        ]
      },
      // protect route for user
      {
        path: "/dashboard/user",
        element: <UserProtect></UserProtect>,
        children: [
          {
            path: 'profile',
            element: <UserProfile></UserProfile>
          }
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CartContextProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={5}
      />
    </CartContextProvider>
  </StrictMode>,
)
