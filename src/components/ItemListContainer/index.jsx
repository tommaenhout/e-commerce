
import { Typography } from "@mui/material";
import './styles.css'
import fighter from '../../assets/fighter.png'



const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <Typography variant="h5">{greeting}</Typography>
            <img className="imageFighter" src={fighter} alt="fighter"/>
        </div>
    );
    }

export default ItemListContainer;