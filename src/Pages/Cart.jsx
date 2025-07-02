import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Minus, Plus, X } from "lucide-react";
import { useData } from "../Context/AuthContext";
import emptyCart from '../Assets/Empty.json';
import Lottie from "lottie-react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function CartPage() {
  const { cartItem, setCartItem } = useCart();
  const { location, getLocation } = useData();
  const navigate = useNavigate()
  console.log(location);
  

  const subtotal = cartItem.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const [promo, setPromo] = useState('');
  const [discount, setDiscount] = useState(0);


  // ##################### Delivary info Form ######################
  // ##################### Delivary info Form ######################
  // ##################### Delivary info Form ######################

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    address: "",
    state: "",
    country: "",
    postcode: "",
    phone: ""
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleDeliverySubmit = (e) => {
    e.preventDefault();

    // যদি আগেই সাবমিট হয়ে থাকে
    if (success) {
      toast.info("You've already submitted your delivery details.");
      return;
    }

    let newError = {};

    if (!deliveryInfo.name) newError.name = "Name is required";
    if (!deliveryInfo.address) newError.address = "Address is required";
    if (!deliveryInfo.state) newError.state = "State is required";
    if (!deliveryInfo.country) newError.country = "Country is required";
    if (!deliveryInfo.postcode) newError.postcode = "Postcode is required";
    if (!deliveryInfo.phone) {
      newError.phone = "Phone is required";
    } else if (
      isNaN(deliveryInfo.phone) ||
      deliveryInfo.phone.length < 10 ||
      deliveryInfo.phone.length > 15
    ) {
      newError.phone = "Phone must be 10-15 digits and only numbers";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      localStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo));
      setSuccess(true);
      toast.success("🎉 Your delivery details have been submitted successfully!");
    } else {
      setSuccess(false);
      toast.error("⚠️ Please complete all fields and allow location access.");
    }
  };

  const handleDetectLocation = async () => {
    toast.info("📍 Detecting your location...");
    try {
      await getLocation();

      setTimeout(() => {
        if (location?.country || location?.state || location?.postcode) {
          setDeliveryInfo(info => ({
            ...info,
            country: location?.country || "",
            state: location?.state || "",
            postcode: location?.postcode || "",
            address: [
              location?.town,
              location?.road,
              location?.suburb,
              location?.city,
              location?.state,
              location?.postcode
            ].filter(Boolean).join(', ')
          }));
          toast.success("Location detected and autofilled!");
        } else {
          setDeliveryInfo(info => ({
            ...info,
            country: "",
            state: "",
            postcode: "",
            address: ""
          }));
          toast.error("Failed to detect location. Please enable GPS and try again.");
        }
      }, 1500);
    } catch {
      setDeliveryInfo(info => ({
        ...info,
        country: "",
        state: "",
        postcode: "",
        address: ""
      }));
      toast.error("Failed to detect location. Please enable GPS and try again.");
    }
  };

  // const addToCart = (product) => {
  //   setCartItem(prev => {
  //     // যদি আগেই cart-এ থাকে, তাহলে quantity বাড়াও
  //     const found = prev.find(item => item.id === product.id);
  //     if (found) {
  //       return prev.map(item =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }
  //     // না থাকলে নতুন করে quantity: 1 দিয়ে add করো
  //     return [...prev, { ...product, quantity: 1 }];
  //   });
  // };

  const handleIncrease = (id) => {
    setCartItem(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItem(prev =>
      prev.map(item =>
        item.id === id && (item.quantity || 1) > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item from cart
  const handleRemove = (id) => {
    setCartItem(prev => prev.filter(item => item.id !== id));
    toast.error("Product removed from cart!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Cart List Section - Full Width */}
        <div className="bg-white rounded-2xl p-6 shadow-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-purple-900">
              Cart <span className="text-gray-400">({cartItem.length} products)</span>
            </h2>
            <button className="text-red-500 text-sm hover:underline" onClick={() => { setCartItem([]); toast.error("Cart cleared!"); }}>Clear cart</button>
          </div>

          {/* Header */}
          <div className="grid grid-cols-4 text-sm text-gray-500 font-semibold mb-4 px-4">
            <div>Product</div>
            <div className="text-center">Count</div>
            <div className="text-center">Price</div>
            <div className="text-center">Action</div>
          </div>

          {/* Cart Items */}
          {cartItem.length > 0 ? (
            cartItem.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-4 items-center border-b last:border-b-0 px-4 py-4"
              >
                {/* Product */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.images[0]}
                    alt=""
                    className="w-16 h-16 object-contain rounded-xl bg-gray-100"
                  />
                  <div>
                    <h4 className="font-semibold text-purple-900 leading-5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.brand}</p>
                  </div>
                </div>
                {/* Count */}
                <div className="flex justify-center items-center space-x-2">
                  <button
                    className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600"
                    onClick={() => handleDecrease(item.id)}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center">{item.quantity || 1}</span>
                  <button
                    className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600"
                    onClick={() => handleIncrease(item.id)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {/* Price */}
                <div className="text-center font-semibold text-black">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
                {/* Action */}
                <div className="flex justify-center">
                  <button className="text-red-500" onClick={() => handleRemove(item.id)}>
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col bg-purple-100 items-center justify-center h-[500px] ">
              <h1 className="text-purple-900 font-bold text-5xl text-center w-full">Oh no! Your cart is empty</h1>
              <Lottie animationData={emptyCart} className="w-[200px] mt-14" />
              <button onClick={()=>navigate('/product')} className="font-bold text-lg text-white bg-purple-600 py-2 px-4 rounded-lg mt-5 ">Continue Shopping</button>
            </div>
          )}
        </div>

        {/* Delivery Info Form & [Promo code + Summary] side by side, promo+summary এক card-এ */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Delivery Info Form section */}
          <div className="bg-purple-900 text-white p-6 rounded-2xl flex-1 flex flex-col justify-between shadow-md h-full min-h-[260px]">
            <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
            <form className="flex flex-col gap-4 flex-1 justify-between" onSubmit={handleDeliverySubmit}>
              <div>
                <label className="block text-sm mb-1" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 rounded bg-white text-purple-900 focus:outline-none"
                  placeholder="Enter your name"
                  value={deliveryInfo.name}
                  onChange={e => setDeliveryInfo({ ...deliveryInfo, name: e.target.value })}
                />
                {error.name && <div className="text-red-200 text-xs">{error.name}</div>}
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="address">Address</label>
                <input
                  id="address"
                  type="text"
                  className="w-full p-2 rounded bg-white text-purple-900 focus:outline-none"
                  placeholder="Enter your address"
                  value={deliveryInfo.address}
                  onChange={e => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                />
                {error.address && <div className="text-red-200 text-xs">{error.address}</div>}
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1" htmlFor="state">State</label>
                  <input
                    id="state"
                    type="text"
                    className="w-full p-2 rounded bg-white text-purple-900 focus:outline-none"
                    placeholder="State"
                    value={deliveryInfo.state}
                    onChange={e => setDeliveryInfo({ ...deliveryInfo, state: e.target.value })}
                  />
                  {error.state && <div className="text-red-200 text-xs">{error.state}</div>}
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1" htmlFor="country">Country</label>
                  <input
                    id="country"
                    type="text"
                    className="w-full p-2 rounded bg-white text-purple-900 focus:outline-none"
                    placeholder="Country"
                    value={deliveryInfo.country}
                    onChange={e => setDeliveryInfo({ ...deliveryInfo, country: e.target.value })}
                  />
                  {error.country && <div className="text-red-200 text-xs">{error.country}</div>}
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1" htmlFor="postcode">Postcode</label>
                  <input
                    id="postcode"
                    type="text"
                    className="w-full p-2 rounded bg-white text-purple-900 focus:outline-none"
                    placeholder="Postcode"
                    value={deliveryInfo.postcode}
                    onChange={e => setDeliveryInfo({ ...deliveryInfo, postcode: e.target.value })}
                  />
                  {error.postcode && <div className="text-red-200 text-xs">{error.postcode}</div>}
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-2 rounded bg-white text-purple-900 focus:outline-none"
                  placeholder="Enter your phone number"
                  value={deliveryInfo.phone}
                  onChange={e => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                />
                {error.phone && <div className="text-red-200 text-xs">{error.phone}</div>}
              </div>
              <button
                type="submit"
                className="mt-4 bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold"
              >
                Submit
              </button>
              <div className="w-full text-center font-bold">OR</div>
              <hr />
              <button
                type="button"
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
                onClick={handleDetectLocation}
              >
                Detect Location
              </button>
              {success && <div className="text-green-200 text-xs mt-2">Delivery info saved!</div>}
            </form>
          </div>
          {/* Promo code + Summary একসাথে এক card-এ */}
          <div className="bg-white rounded-2xl p-6 shadow-md flex-1 h-full flex flex-col justify-between min-h-[260px]">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-900">Promo code</h3>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="flex-grow p-2 border rounded-l-lg"
                  value={promo}
                  onChange={e => setPromo(e.target.value)}
                />
                <button
                  className="bg-purple-900 text-white px-4 rounded-r-lg"
                  onClick={() => {
                    // উদাহরণ: 'SAVE10' দিলে ১০% ছাড়
                    if (promo === 'SAVE10') {
                      setDiscount(subtotal * 0.10);
                      toast.success("Promo code applied successfully!");
                    } else {
                      setDiscount(0);
                      toast.error("Invalid promo code");
                    }
                  }}
                  type="button"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${(subtotal - discount).toFixed(2)}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold">
                Continue to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
