import * as React from "react";
import { render } from "react-dom";
import { CalcState, showState,Item} from './types/types';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import {addItem} from './store/reducers/calculateReducer';

const rootElement= document.getElementById('root'); 

render(
    <Provider store={store}>
      <App addItem={addItem} />
    </Provider>, rootElement as HTMLElement);