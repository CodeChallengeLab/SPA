import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { router } from './router/router';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC0CB',
    },
    secondary: {
      main: '#E91E63',
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 400,
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 200,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
