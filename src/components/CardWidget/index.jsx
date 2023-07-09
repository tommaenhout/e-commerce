import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartModal from '../ShoppingCartModal';
import {useState} from 'react';
import './styles.css'

const CardWidget = ({total}) => {
    const [open, setOpen] = useState(false);
    const onClickHandler = () => {
        setOpen(prev => !prev)
    }

    return (
        <>
            <ShoppingCartModal open={open} setOpen={setOpen}/>
            <div className='containerShoppingCart'>
                <ShoppingCartIcon onClick={onClickHandler}/>
                {total > 0 && <p className='shoppingCartAmount'>{total}</p>}
            </div>
        </>
    )
}

export default CardWidget