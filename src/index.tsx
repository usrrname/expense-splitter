import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import { DeleteItemAction, AddItemAction } from "./store/actions/actions";

const rootElement = document.getElementById('root');

const Root = () =>
  <Provider store={store}>
    <App addItem={AddItemAction} deleteItem={DeleteItemAction} />
  </Provider>

render(<Root />, rootElement)
store.subscribe(() => render)