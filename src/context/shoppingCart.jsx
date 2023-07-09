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

        const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

        const clearCart = () => {
            setShoppingCart([]);
        }

        return (
            <ShoppingCartContext.Provider value={{shoppingCart, addToCart, removeFromCart, clearCart, total}}>
                {props.children}
            </ShoppingCartContext.Provider>
        );

}



