import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import PaperTexture from './assets/paper-texture-2.jpg';

const theme: Theme = createTheme({
  typography: {
    fontFamily: '"Indie Flower", cursive',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${PaperTexture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh',
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Indie Flower", cursive',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: '"Indie Flower", cursive',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Indie Flower", cursive',
        },
      },
    },
  },
});

export default theme; 