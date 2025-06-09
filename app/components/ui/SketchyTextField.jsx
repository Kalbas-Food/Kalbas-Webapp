import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const SketchyTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '8px',

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      borderRadius: '12px',
      border: '3px solid black',
      backgroundColor: 'white',
      filter: 'url(#sketchy-filter)',
      boxShadow: '2px 2px 0px 1px rgba(0,0,0,1)',
      transition: 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, border-color 0.1s ease-in-out',
    },

    '&:hover:not(.Mui-focused)': {
      '&::before': {
        boxShadow: '3px 3px 0px 1px rgba(0,0,0,1)',
      },
    },

    '&.Mui-focused': {
      '&::before': {
        transform: 'translateY(-2px)',
        boxShadow: '4px 4px 0px 1px rgba(0,0,0,1)',
        borderColor: '#3d84f5',
      },
    },

    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    padding: '12px 20px',
  },
});

export default SketchyTextField; 