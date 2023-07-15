import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartModal from '../ShoppingCartModal';
import {useState} from 'react';
import  {ShoppingCartContext}  from '../../context/shoppingCart';
import { useContext } from 'react';
import './styles.css'
import Swal from 'sweetalert2';

const CardWidget = ({total}) => {
    const [open, setOpen] = useState(false);
    const [checkout , setCheckout] = useState(false)
    const {shoppingCart} = useContext(ShoppingCartContext)
    const onClickHandler = () => {
        setCheckout(false)
        if(shoppingCart.length === 0) {
            setOpen(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your shopping cart is empty!',
                confirmButtonText: 'Continue Shopping',
                })
        } else { 
        setOpen(true)
        }
    }

    return (
        <>
            <ShoppingCartModal open={open} setOpen={setOpen} checkout={checkout} setCheckout={setCheckout}/>
            <div className='containerShoppingCart'>
                <ShoppingCartIcon onClick={onClickHandler}/>
                {total > 0 && <p className='shoppingCartAmount'>{total}</p>}
            </div>
        </>
    )
}

export default CardWidget