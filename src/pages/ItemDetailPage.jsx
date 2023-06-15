import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Typography } from "@mui/material";



const ItemDetailPage = () => {
    const {itemId} = useParams()
    const {data,getData,loading} = useFetch()

    useEffect(() => {
        getData("../../products.json", parseInt(itemId) )
    }, [itemId])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div>
            <div>
                <Typography variant="h5">Product info</Typography>
            </div>
            <div>
                {loading ? <Typography variant="h5">Loading...</Typography> :
                <div>
                    <div>
                        <img src={`/src/assets/${data.imagePath}`} alt={data.name} style={{ height: "500px"}}/>
                    <div>
                        <Typography variant="h5">{data.name}</Typography>
                        <Typography variant="h5">{data.price}</Typography>
                        <Typography variant="h5">{data.description}</Typography>
                    </div>
                    </div>
                    </div>} 
                </div>
               
        </div>
    );
    }
export default ItemDetailPage;