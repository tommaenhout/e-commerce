
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import Box from '@mui/material/Box';



const Item = ({ item }) => {
    const { id, name, price, imagePath } = item;
    const [imageLoaded, setImageLoaded] = useState(false)
    const navigate = useNavigate();

    return (
        <div>
            <Card onClick={()=>{navigate(`/item/${id}`)}} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                {!imageLoaded && <Box sx={{ display: 'flex', justifyContent:"center" }}><CircularProgress/></Box>}
                    <CardMedia
                        component="img"
                        height="400"
                        image={imagePath}
                        alt={name}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>See details</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Item;