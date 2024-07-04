import { Button, Typography, styled } from '@mui/material';
import React from 'react'; 

const VisuallyHiddenInput = styled('input')`
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1px,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
`;

const Literatur = (props) => { 
  
  return ( 
    <div> 
        <Typography>{props.text}</Typography> 
        <Button
        component="label"
        role="undefined"
        variant="outlined"
        tabIndex={-1}
        >
        <VisuallyHiddenInput type="file" />
        </Button>
    </div> 
  ); 
}; 

export {Literatur};