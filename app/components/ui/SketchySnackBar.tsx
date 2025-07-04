import React from 'react';
import { Snackbar, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SketchySnackBarProps {
  open: boolean;
  message: string;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  autoHideDuration?: number;
  severity?: 'success' | 'error' | 'info' | 'warning';
}

const getSeverityColor = (theme: any, severity?: string) => {
  switch (severity) {
    case 'success':
      return theme.palette.success.main;
    case 'error':
      return theme.palette.error.main;
    case 'info':
      return theme.palette.info.main;
    case 'warning':
      return theme.palette.warning.main;
    default:
      return theme.palette.text.primary;
  }
};

const SketchySnackBarContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'severity',
})<{
  severity?: 'success' | 'error' | 'info' | 'warning';
}>(({ theme, severity }) => {
  const color = getSeverityColor(theme, severity);
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: 220,
    maxWidth: 400,
    padding: '0.75rem 1.5rem',
    borderRadius: '15px 50px 10px 40px / 40px 10px 50px 15px',
    fontFamily: 'inherit',
    fontWeight: 500,
    color: theme.palette.text.primary,
    background: 'transparent',
    zIndex: 0,
    boxShadow: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      border: `2px solid ${color}`,
      borderRadius: '15px 50px 10px 40px / 40px 10px 50px 15px',
      background: theme.palette.background.paper,
      filter: 'url(#sketchy-filter)',
      boxShadow: `2px 2px 0px 1px ${color}`,
      zIndex: -1,
      transition: 'box-shadow 0.1s ease-in-out',
    },
  };
});

const SketchySnackBar: React.FC<SketchySnackBarProps> = ({ open, message, onClose, autoHideDuration = 2000, severity }) => {
  const theme = useTheme();
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      ContentProps={{
        sx: { background: 'transparent', boxShadow: 'none', p: 0 },
      }}
      message={
        <SketchySnackBarContent severity={severity}>
          <Typography sx={{ fontFamily: 'inherit', fontWeight: 500, color: theme.palette.text.primary }}>
            {message}
          </Typography>
        </SketchySnackBarContent>
      }
    />
  );
};

export default SketchySnackBar; 