import React from 'react';
import { IconButton } from '@mui/material';
import type { IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  border: 'none',
  borderRadius: '8px',
  padding: theme.spacing(1),
  backgroundColor: 'transparent',
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
    zIndex: -1,
    borderRadius: '8px',
    border: `2px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.background.paper,
    filter: 'url(#sketchy-filter)',
    boxShadow: `4px 4px 0px ${theme.palette.text.primary}`,
    transition: 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&::before': {
      boxShadow: `6px 6px 0px ${theme.palette.text.primary}`,
    },
  },
  '&:active': {
    transform: 'translate(2px, 2px)',
    '&::before': {
      boxShadow: `2px 2px 0px ${theme.palette.text.primary}`,
    },
  },
}));

interface SketchyIconButtonProps extends IconButtonProps {
  // Any specific props for SketchyIconButton can go here
}

const SketchyIconButton: React.FC<SketchyIconButtonProps> = ({ children, ...props }) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};

export default SketchyIconButton; 