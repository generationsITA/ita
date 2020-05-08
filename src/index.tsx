import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { theme } from "./index.style";
import "./styles/index.css";
import { GlobalCSS } from "./index.style";
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StylesProvider>
          <GlobalCSS />
          <App />
        </StylesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
