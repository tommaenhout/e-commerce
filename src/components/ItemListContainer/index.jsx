
import { Typography } from "@mui/material";
import './styles.css'
import Item from "../Item";


const ItemListContainer = ({ greeting, products}) => {
    return (
        <div className="container">
            <Typography variant="h5">{greeting}</Typography>
            <div className="containerItems">
            
            {
            products && products.map((product) => {
                    return (
                        <Item key={product.id} item={product} />
                    )
                })}  
                </div>
        </div>
    );
    }

export default ItemListContainer;