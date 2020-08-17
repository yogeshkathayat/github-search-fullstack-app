import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import "./index.css";
import App from "./App";
import { store,persistor } from "./store/store";
ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
