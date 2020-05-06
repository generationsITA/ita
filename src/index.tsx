import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./store/root.reducer";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { theme } from "./index.style";
import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import "./styles/index.css";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/root.saga";
import { GlobalCSS } from "./index.style";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose ||
  applyMiddleware(...middleware);

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

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
