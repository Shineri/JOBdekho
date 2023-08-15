import { createTheme } from '@mui/material/styles';
import { amber, blue, grey, lightBlue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        },
        secondary: {
            main: lightBlue[800],
            midNightBlue: "#003366"
        }
    }
}); 

export const themeColors = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: {
                main: "#003366",
                white: "#003366"
            },
            secondary:{
                main: blue[500],
                midNightBlue: "#2196f3"
            },
            background: {
              default: "#1e1e1e",
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  