import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './layouts/theme';
const root = createRoot(document.getElementById('root')!);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
