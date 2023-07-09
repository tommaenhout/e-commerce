import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useContext} from 'react';
import {ShoppingCartContext} from '../../context/shoppingCart';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ShoppingCartModal({setOpen, open}) {
  const {shoppingCart, total} = useContext(ShoppingCartContext)
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Shopping Cart
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {shoppingCart.map((item)=>(
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))} 
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
            Total: ${total}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}