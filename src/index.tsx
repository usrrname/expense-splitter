import * as React from "react";

import App from './App';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import store from './store/store';

const rootElement = document.getElementById('root');

const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <App isFocused/>
    </Provider>,
    rootElement)
}
render();

store.subscribe(render);
