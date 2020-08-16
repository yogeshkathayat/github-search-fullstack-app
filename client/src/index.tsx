import React from 'react';
import ReactDOM from 'react-dom';
import { CSSReset, Heading, ThemeProvider } from "@chakra-ui/core";
import './index.css';
import App from './App';

ReactDOM.render(
<ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

