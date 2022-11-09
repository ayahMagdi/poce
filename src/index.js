import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import {BrowserRouter} from 'react-router-dom'
import reducer, {initialState} from './reducer';
import {StateProvider} from './stateProvider';

ReactDOM.render(
              <StateProvider reducer={reducer} initialState={initialState}>
                  <App />
              </StateProvider>,
              document.querySelector("#root")
             );