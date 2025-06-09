import { createTheme } from '@mui/material/styles';
import PaperTexture from './assets/paper-texture-2.jpg';

const theme = createTheme({
  typography: {
    fontFamily: '"Patrick Hand", cursive',
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
          fontFamily: '"Patrick Hand", cursive',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: '"Patrick Hand", cursive',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Patrick Hand", cursive',
        },
      },
    },
  },
});

export default theme; 