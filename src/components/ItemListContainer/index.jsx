
import { Typography } from "@mui/material";
import './styles.css'
import fighter from '../../assets/fighter.png'
import Item from "../Item";


const ItemListContainer = ({ greeting, products}) => {
    return (
        <div className="container">
            <Typography variant="h5">{greeting}</Typography>
            <img className="imageFighter" src={fighter} alt="fighter"/>
            <div className="containerItems">
            {products && products.products.map((product) => {
                    return (
                        console.log(product),
                        <Item key={product.id} item={product} />
                    )
                })}  
                </div>
        </div>
    );
    }

export default ItemListContainer;