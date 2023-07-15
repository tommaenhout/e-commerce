import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useContext, useState} from 'react';
import {ShoppingCartContext} from '../../context/shoppingCart';
import {Item, IconContainer, PriceContainer, NameContainer} from './styles';
import CheckoutForm from '../CheckoutForm';
import { Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "700px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ShoppingCartModal({setOpen, open, setCheckout, checkout}) {
  const {shoppingCart, total, getTotalProduct, increment, decrement} = useContext(ShoppingCartContext)
  const handleClose = () => setOpen(false);



  function  formatNumber(number) {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(number)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
        <Box sx={style}>
          {checkout ? <CheckoutForm total={total} items={shoppingCart} setOpen={setOpen}  /> :( 
            <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Shopping Cart
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt:2 }}>
            {shoppingCart.map((item, index)=>(
              <Item key={index}>
                <NameContainer>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </NameContainer>
                <IconContainer>
                    <RemoveIcon onClick={()=>{decrement(item)}}/><span style={{paddingRight: "20px", paddingLeft:"20px"}}>{item.quantity}</span><AddIcon onClick={()=>{increment(item)}}/> 
                </IconContainer>
                <PriceContainer>
                  <span>${formatNumber(getTotalProduct(item))}</span>
                </PriceContainer>
                </Item>
            ))} 
          </Typography>
          <div style={{width: "100%" ,display:"flex", justifyContent: "flex-end", marginRight: "60px"}}>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
            Total: ${formatNumber(total)}
            </Typography>
              <Button 
                onClick={()=>{setOpen(false)}}
                variant='outlined'  
                style={{alignSelf: "flex-end", top: 4, marginLeft: 30}}>
                  Continue buying
                  </Button>
              <Button 
                onClick={()=>{setCheckout(true)}}
                variant='contained' 
                color='success' 
                style={{alignSelf: "flex-end", top: 4, marginLeft: 10}}>
                  Buy
                  </Button>
            </div>
            </>
          )}
        </Box>     
      </Modal>
    </div>
  );
}