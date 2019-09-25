import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';
import { deleteUser } from "./store/reducers/UserListReducer";
const rootElement = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement)
}
render();

store.subscribe(render);