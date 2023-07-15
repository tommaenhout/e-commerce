import {useState, createContext} from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = (props) => {
        const [shoppingCart, setShoppingCart] = useState([]);
         
        const addToCart = (product) => {
            const found = shoppingCart.find(item => item.id === product.id);
            if (found) {
                found.quantity += product.quantity;
                setShoppingCart([...shoppingCart]);
                return;
            }
            setShoppingCart([...shoppingCart, product]);
        }

        const removeFromCart = (product) => {
            setShoppingCart(shoppingCart.filter(item => item.id !== product.id));
        }

        const increment = (product) => {
            product.quantity += 1;
            setShoppingCart([...shoppingCart]);
        }

        const decrement = (product) => {
            if (product.quantity === 1) {
                removeFromCart(product);
                return;
            }
            product.quantity -= 1;
            setShoppingCart([...shoppingCart]);
        }

        const getQuantity = (product) => {
            const found = shoppingCart.find(item => item.id === product.id);
            if (found) return found.quantity;
            return 0;
        }

        const getTotalProduct = (product) => {
            const found = shoppingCart.find(item => item.id === product.id);
            if (found) return found.quantity * found.price;
            return 0;
        }



        const total = shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        const clearCart = () => {
            setShoppingCart([]);
        }

        return (
            <ShoppingCartContext.Provider value={{shoppingCart, addToCart, removeFromCart, clearCart, total, getTotalProduct, getQuantity, decrement, increment}}>
                {props.children}
            </ShoppingCartContext.Provider>
        );

}



