import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Typography, Button } from "@mui/material";
import { ItemDetailContainer , BodyContainer, TextContainer} from "./styles";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/shoppingCart";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const ItemDetailPage = () => {
    const {itemId} = useParams()
    const {data,getData,loading} = useFetch()
    const {addToCart} = useContext(ShoppingCartContext)
    const [quantity, setQuantity] = useState(0)

 
    useEffect(() => {
        getData({id:  itemId})
    }, [itemId])

    const onClickHandler = () => {
         addToCart(data)
     }


    return (
        loading ? (
            <div>Loading...</div>
          ) :
          data &&
          (
            <ItemDetailContainer>
              <BodyContainer>
                <div>
                  <img
                    src={data.imagePath}
                    alt={data.name}
                    style={{ height: "500px" }}
                  />
                </div>
                <TextContainer>
                  <Typography style={{ marginBottom: 20 }} variant="h5">
                    Product info
                  </Typography>
                  <Typography variant="subtitle1">{data.name}</Typography>
                  <Typography variant="body1">${data.price}</Typography>
                  <Typography variant="subtitle2">{data.description}</Typography>  
                  <div style={{display:"flex"}}><RemoveIcon/><span style={{margin: "0px 20px"}}>{quantity}</span><AddIcon/></div>       
                  <Button style={{paddingLeft: 0, marginTop: 20}}>
                      <Typography onClick={onClickHandler} variant="body1">Add to cart</Typography>
                  </Button>
                </TextContainer>
                
              </BodyContainer>
            </ItemDetailContainer>
          )
    );
    }
export default ItemDetailPage;