import React from 'react';
import { Popover, Box, styled } from '@mui/material';
import type { PopoverProps } from '@mui/material';

const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPopover-paper': {
    position: 'relative',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    overflow: 'visible',
    minWidth: '250px',
    maxWidth: '300px',
    margin: theme.spacing(1),

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      borderRadius: '12px',
      border: '2px solid black',
      backgroundColor: 'white',
      filter: 'url(#sketchy-filter)',
      boxShadow: '4px 4px 0px black',
    },
  },
}));

interface SketchyPopoverProps extends Omit<PopoverProps, 'children'> {
  children: React.ReactNode;
}

const SketchyPopover: React.FC<SketchyPopoverProps> = ({ children, ...props }) => {
  return (
    <StyledPopover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      marginThreshold={16}
      {...props}
    >
      <Box sx={{ p: 2 }}>{children}</Box>
    </StyledPopover>
  );
};

export default SketchyPopover; 