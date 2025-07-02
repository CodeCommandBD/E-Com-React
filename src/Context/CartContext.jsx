import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext({
  cartItem: [],
  setCartItem: () => {},
  addTocart: () => {},
});

export const CartContextProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState([])
    const addTocart = (product) => {
        const found = cartItem.find(item => item.id === product.id);
        if (found) {
            toast.success("Product quantity increased!");
            setCartItem(prev =>
                prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            );
        } else {
            toast.success("Product is added to cart!");
            setCartItem(prev => [...prev, { ...product, quantity: 1 }]);
        }
    }
    return (
        <CartContext.Provider value={{cartItem, setCartItem, addTocart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)