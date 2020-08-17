import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import './index.css';
import App from './App';
import store from "./store/store";
ReactDOM.render(
<ThemeProvider>

    <CSSReset />
    <Provider store={store}>
    <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

