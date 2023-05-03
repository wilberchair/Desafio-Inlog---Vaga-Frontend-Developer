
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRoutes } from './routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import "./App.css";

const theme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header />
          <AppRoutes />
        <Footer />
    </ThemeProvider>
  );
}