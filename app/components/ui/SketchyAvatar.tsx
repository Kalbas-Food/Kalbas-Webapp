import React from 'react';
import { Box, Avatar, styled } from '@mui/material';
import type { AvatarProps } from '@mui/material';

interface SketchyAvatarProps extends AvatarProps {
  size?: number;
}

const AvatarWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  zIndex: 0,

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: '2px solid black',
    filter: 'url(#sketchy-filter)',
    boxShadow: '2px 2px 0px orange',
    zIndex: 1,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: '2px solid black',
    filter: 'url(#sketchy-filter)',
    zIndex: 1,
  },
}));

const SketchyAvatar: React.FC<SketchyAvatarProps> = ({ size = 50, ...props }) => {
  return (
    <AvatarWrapper>
      <Avatar
        {...props}
        sx={{ 
          width: size, 
          height: size,
          border: '2px solid transparent',
          ...props.sx 
        }}
      />
    </AvatarWrapper>
  );
};

export default SketchyAvatar; 