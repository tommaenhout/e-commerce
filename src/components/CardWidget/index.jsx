import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles.css'

const CardWidget = () => {
    return (
        <div className='containerShoppingCart'>
            <ShoppingCartIcon/>
            <p className='shoppingCartAmount'>5</p>
        </div>
    )
}

export default CardWidget