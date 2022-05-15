import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1DA1F2',
    },
    secondary: {
      main: '#657786',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;