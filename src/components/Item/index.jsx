
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import image from '../../assets/fighter.png';


const Item = ({ item }) => {
    const { id, name, price, imagePath } = item;
    const navigate = useNavigate();

    return (
        <div>
            <Card onClick={()=>{navigate(`/item/${id}`)}} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={"/src/assets/" + imagePath }
                        alt={name}
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