import {useState, createContext} from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = (props) => {
        const [shoppingCart, setShoppingCart] = useState([]);
         
        const addToCart = (product) => {
            setShoppingCart([...shoppingCart, product]);
        }

        const removeFromCart = (product) => {
            setShoppingCart(shoppingCart.filter(item => item.id !== product.id));
        }

        const clearCart = () => {
            setShoppingCart([]);
        }

        return (
            <ShoppingCartContext.Provider value={{shoppingCart, addToCart, removeFromCart, clearCart}}>
                {props.children}
            </ShoppingCartContext.Provider>
        );

}



