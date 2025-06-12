import React from 'react';
import { Drawer, Box, styled } from '@mui/material';
import type { DrawerProps } from '@mui/material';

const StyledDrawerPaper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '0',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  overflow: 'visible',
  minWidth: 340,
  maxWidth: 400,
  margin: 0,
  padding: 0,
  height: '100vh',
  top: 0,

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    borderRadius: '0',
    borderTop: '0px',
    borderBottom: '0px',
    borderLeft: `1.5px solid ${theme.palette.text.primary}`,
    borderRight: '0px',
    backgroundColor: theme.palette.background.paper,
    filter: 'url(#sketchy-filter)',
    boxShadow: `0 4px 24px 0 ${theme.palette.text.primary}22`,
  },
}));

const ScrollBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  minHeight: '100vh',
  height: '100vh',
  background: 'transparent',
  maxHeight: '100vh',
  overflowY: 'auto',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE/Edge
  '&::-webkit-scrollbar': {
    display: 'none', // Chrome/Safari
  },
}));

interface SketchyDrawerProps extends DrawerProps {
  children: React.ReactNode;
}

const SketchyDrawer: React.FC<SketchyDrawerProps> = ({ children, ...props }) => {
  return (
    <Drawer
      PaperProps={{
        component: StyledDrawerPaper as any,
        sx: { background: 'transparent', boxShadow: 'none', p: 0 },
      }}
      {...props}
    >
      <ScrollBox>
        {children}
      </ScrollBox>
    </Drawer>
  );
};

export default SketchyDrawer; 