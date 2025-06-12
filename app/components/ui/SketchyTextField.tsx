import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const SketchyTextField = styled(TextField)(({ theme }) => ({
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
      border: `2px solid ${theme.palette.text.primary}`,
      backgroundColor: theme.palette.background.paper,
      filter: 'url(#sketchy-filter)',
      boxShadow: `1px 1px 0px 1px ${theme.palette.text.primary}`,
      transition: 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, border-color 0.1s ease-in-out',
    },

    '&:hover:not(.Mui-focused)': {
      '&::before': {
        boxShadow: `2px 2px 0px 1px ${theme.palette.text.primary}`,
      },
    },

    '&.Mui-focused': {
      '&::before': {
        transform: 'translateY(-2px)',
        boxShadow: `3px 3px 0px 1px ${theme.palette.text.primary}`,
        borderColor: theme.palette.primary.main,
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
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
}));

export default SketchyTextField; 