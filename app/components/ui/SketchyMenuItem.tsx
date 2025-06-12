import React from 'react';
import { Box, Typography, styled } from '@mui/material';

interface SketchyMenuItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
  color?: string;
}

const StyledMenuItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  marginBottom: theme.spacing(1),
  zIndex: 0,

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '8px',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    transition: 'all 0.2s ease',
    zIndex: -1,
  },

  '&:hover': {
    transform: 'translateY(-1px)',
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      border: '2px solid black',
      filter: 'url(#sketchy-filter)',
      boxShadow: '2px 2px 0px black',
    },
  },

  '&:active': {
    transform: 'translateY(1px)',
    '&::before': {
      boxShadow: '1px 1px 0px black',
    },
  },

  '& img': {
    width: 24,
    height: 24,
    transition: 'transform 0.2s ease',
  },

  '&:hover img': {
    transform: 'scale(1.1)',
  },
}));

const SketchyMenuItem: React.FC<SketchyMenuItemProps> = ({ 
  icon, 
  label, 
  onClick, 
  color = 'inherit' 
}) => {
  return (
    <StyledMenuItem onClick={onClick}>
      <Box
        component="img"
        src={icon}
        alt={label}
      />
      <Typography 
        variant="body1" 
        sx={{ 
          fontFamily: 'inherit',
          color,
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </StyledMenuItem>
  );
};

export default SketchyMenuItem; 