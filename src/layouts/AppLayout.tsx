import { AppBar, Toolbar, Typography, Container, Box, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NoDecorationLink from '../components/NoDecorationLink';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { lightTheme, darkTheme } from './theme';
import { useState } from 'react';
import localStorageService from '../services/localStorage';

export default function AppLayout() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorageService.getItem<string>('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorageService.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <NoDecorationLink to='/'>Marketplace App</NoDecorationLink>
            </Typography>
            <IconButton color='inherit' onClick={handleToggleDarkMode}>
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container component='main' sx={{ flexGrow: 1, py: 2 }} maxWidth='xl'>
          <Outlet />
        </Container>
        <Box component='footer' sx={{ py: 2, textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            &copy; {new Date().getFullYear()} Marketplace App. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
