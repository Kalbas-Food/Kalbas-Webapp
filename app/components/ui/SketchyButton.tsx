import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SketchyButton = styled(Button)(({ theme, variant }) => ({
    position: 'relative',
    fontWeight: 'bold',
    color: variant === 'contained' ? theme.palette.getContrastText(theme.palette.primary.main) : theme.palette.text.primary,
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
        border: `2px solid ${theme.palette.text.primary}`,
        borderRadius: '15px 50px 10px 40px / 40px 10px 50px 15px',
        backgroundColor: variant === 'contained' ? theme.palette.primary.main : theme.palette.background.paper,
        boxShadow: `1px 1px 0px 1px ${theme.palette.text.primary}`,
        transition: 'box-shadow 0.1s ease-in-out',
        filter: 'url(#sketchy-filter)',
        zIndex: -1,
    },

    '&:hover': {
        backgroundColor: 'transparent',
        transform: 'translateY(-2px)',
        boxShadow: 'none',
        '&::before': {
            boxShadow: `3px 3px 0px 1px ${theme.palette.text.primary}`,
        },
    },

    '&:active': {
        transform: 'translateY(1px)',
        '&::before': {
            boxShadow: `1px 1px 0px 1px ${theme.palette.text.primary}`,
        },
    },
}));

export default SketchyButton; 