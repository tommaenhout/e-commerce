import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

export default function TransitionAlerts({open, setOpen}) {

     useEffect(()=> {
        setTimeout(() => {
            setOpen(false)
         }
         , 1000)
     },[open])
  return (
    <div style={{position:"absolute", bottom: 0, right: 0}}>
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          sx={{ mb: 2 }}
        >
            Item added to cart!
        </Alert>
      </Collapse>
    </Box>
    </div>
  );
}