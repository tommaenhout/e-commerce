import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Typography } from "@mui/material";
import { ItemDetailContainer , BodyContainer, TextContainer} from "./styles";



const ItemDetailPage = () => {
    const {itemId} = useParams()
    const {data,getData,loading} = useFetch()

    useEffect(() => {
        getData({url: "../../products.json", id: parseInt(itemId)} )
    }, [itemId])

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
                    src={`/src/assets/${data.imagePath}`}
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
                </TextContainer>
              </BodyContainer>
            </ItemDetailContainer>
          )
    );
    }
export default ItemDetailPage;