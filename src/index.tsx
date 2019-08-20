import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import { DeleteItemAction, AddItemAction } from "./store/actions/actions";

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App deleteItem={DeleteItemAction} />
  </Provider>, rootElement as HTMLElement
)

store.subscribe(() => render)