import * as React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import {addItem} from './store/reducers/calculateReducer';
import {getTotal} from './store/reducers/showPayReducer';

const rootElement= document.getElementById('root'); 

render(
    <Provider store={store}>
      <App item={{id:'', name:'', cost:0}} getTotal={getTotal} addItem={addItem} />
    </Provider>, rootElement);