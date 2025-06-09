import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SketchyButton = styled(Button)(({ theme, variant }) => ({
  position: 'relative',
  fontWeight: 'bold',
  color: variant === 'contained' ? 'white' : 'black',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  transition: 'transform 0.1s ease-in-out',
  zIndex: 0,


  // disable ripple effect
  '& .MuiTouchRipple-root': {
    display: 'none',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    border: '3px solid black',
    borderRadius: '15px 50px 10px 40px / 40px 10px 50px 15px',
    backgroundColor: variant === 'contained' ? '#3d84f5' : 'white',
    boxShadow: '2px 2px 0px 1px rgba(0,0,0,1)',
    transition: 'box-shadow 0.1s ease-in-out',
    filter: 'url(#sketchy-filter)',
    zIndex: -1,
  },

  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'translateY(-2px)',
    boxShadow: 'none',
    '&::before': {
      boxShadow: '4px 4px 0px 1px rgba(0,0,0,1)',
    },
  },

  '&:active': {
    transform: 'translateY(1px)',
    '&::before': {
      boxShadow: '2px 2px 0px 1px rgba(0,0,0,1)',
    },
  },
}));

export default SketchyButton; 