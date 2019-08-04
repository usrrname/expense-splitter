import * as React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import { getTotal, addItem } from "./store/actions/actions";

const rootElement= document.getElementById('root'); 

render(
    <Provider store={store}>
      <App getTotal={getTotal} addItem={addItem} />
    </Provider>, rootElement);