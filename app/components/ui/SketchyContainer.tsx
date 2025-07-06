import React from 'react';
import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SketchyContainerProps extends BoxProps {
  disableActiveTransform?: boolean; // New prop to disable active transform
  disableRipple?: boolean; // Add disableRipple prop
}

const StyledSketchyBox = styled(Box)<{ disableActiveTransform?: boolean }>(({ theme, disableActiveTransform }) => ({
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  transition: disableActiveTransform ? 'box-shadow 0.1s ease-in-out' : 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
  zIndex: 0,

  // Common sketchy filter and visual effects
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    borderRadius: '12px',
    border: `2px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.background.paper,
    filter: 'url(#sketchy-filter)',
    boxShadow: `4px 4px 0px ${theme.palette.text.primary}`,
    transition: disableActiveTransform ? 'box-shadow 0.1s ease-in-out' : 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
  },

  // Common hover/active effects
  '&:hover': {
    transform: disableActiveTransform ? 'none' : 'translateY(-2px)',
    '&::before': {
      boxShadow: `6px 6px 0px ${theme.palette.text.primary}`,
    },
  },
  '&:active': {
    transform: disableActiveTransform ? 'none' : 'translate(2px, 2px)',
    transition: disableActiveTransform ? 'none' : 'transform 0.1s ease-in-out',
    '&::before': {
      boxShadow: disableActiveTransform ? `4px 4px 0px ${theme.palette.text.primary}` : `2px 2px 0px ${theme.palette.text.primary}`,
      transition: disableActiveTransform ? 'none' : 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
    },
  },
}));

const SketchyContainer: React.FC<SketchyContainerProps> = ({ children, ...props }) => {
  return <StyledSketchyBox {...props}>{children}</StyledSketchyBox>;
};

export default SketchyContainer; 