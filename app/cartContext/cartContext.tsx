'use client'
import { ReactNode, useState, createContext } from "react";

interface CartContextType {
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const state = { cart: [], setCart: () => null, };

export const CartContext = createContext<CartContextType>(state);
const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<any[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;