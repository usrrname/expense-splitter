import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
const rootElement = document.getElementById('root');

const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <App isFocused />
    </Provider>,
    rootElement)
}
render();

store.subscribe(render);
