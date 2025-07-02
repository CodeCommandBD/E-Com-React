import React from 'react'
import footerLogo from '../Assets/footer-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-4 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img src={footerLogo} alt="Logo" className="w-20 h-20 rounded-full mb-2 border-4 border-gray-700 shadow-lg" />
          <span className="font-bold text-xl tracking-wider" style={{fontFamily: 'Poppins'}}>SHaN</span>
          <span className="text-lg text-gray-400 mt-1">Your favorite marketplace</span>
        </div>
        {/* Main Footer Content: Pages, Follow Us, Subscribe */}
        <div className="flex flex-col md:flex-row gap-8 flex-1 justify-between items-center md:items-start">
          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Pages</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/product" className="hover:text-white transition">Products</Link></li>
              <li><Link to ="/cart" className="hover:text-white transition">Cart</Link></li>
              <li><Link to ="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to ="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-2 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .39.045.765.127 1.124C7.728 8.84 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89-.386.104-.793.16-1.213.16-.297 0-.583-.028-.862-.08.584 1.823 2.28 3.152 4.29 3.188A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395 2.697 2.376 2.414 3.488 2.355 4.769 2.297 6.049 2.284 6.459 2.284 12c0 5.541.013 5.951.072 7.231.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323 1.28.059 1.689.072 7.231.072s5.951-.013 7.231-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.28.072-1.689.072-7.231s-.013-5.951-.072-7.231c-.059-1.281-.342-2.393-1.323-3.374C19.393.414 18.281.131 17 .072 15.719.013 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>
          {/* Subscription */}
          <div className="flex flex-col items-center md:items-start  mt-6 md:mt-0">
            <h3 className="font-semibold mb-2 text-lg">Subscribe</h3>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded bg-gradient-to-r from-green-600 to-purple-600 text-white font-semibold transition text-lg"
              >
                Subscribe
              </button>
            </form>
            <span className="text-xs text-gray-400 mt-2">Get latest offers & updates</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SHaN All rights reserved.
      </div>
    </footer>
  )
}

export default Footer