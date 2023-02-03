import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Material UI theme
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // Highlight Component
    temperature: {
      fontSize: 50,
      color: '#FFFFFF',
      fontWeight: 'bold',
      letterSpacing: 0,
      lineHeight: '76px',
      textAlign: 'center',
    },
    highlightTitle: {
      color: '#01175F',
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '48px',
    },
    highlightDate: {
      color: '#01175F',
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: '18px',
      marginTop: '10px',
    },
    highlightWeather: {
      color: '#01175F',
      fontSize: 20,
      fontWeight: 300,
      letterSpacing: 0,
      lineHeight: '18px',
      marginTop: '20px',
    },
    // Search Component
    searchTitle: {
      color: '#01175F',
      fontFamily: 'Poppins',
      fontSize: '28px',
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '42px',
    },
    // Weekly component
    weeklyday: {
      color: '#ffffff',
      fontFamily: 'Poppins',
      fontSize: '22px',
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: '33px',
    },
    weeklytemperature: {
      fontSize: 50,
      color: '#FFFFFF',
      fontWeight: 'bold',
      letterSpacing: 0,
      lineHeight: '40px',
      textAlign: 'center',
    },
    // Bookmark component
    bookmarkName: {
      color: '#FFFFFF',
      fontSize: '26px',
      fontWeight: '600',
      letterSpacing: 0,
      lineHeight: '39px',
    },
    bookmarkTemp: {
      fontSize: 50,
      color: '#FFFFFF',
      fontWeight: 'bold',
      letterSpacing: 0,
      lineHeight: '76px',
      textAlign: 'center',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

