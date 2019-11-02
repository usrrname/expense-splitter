import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Item, User } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem } from './store/reducers/ItemListReducer';
import { addUser, deleteUser } from './store/reducers/UserListReducer';
//import UserList from './components /UserList';
import { AppState } from './store/store';
import UserList from './components /UserList';
import ExpenseItem from './components /ExpenseItem';
import cloneDeep from 'lodash/cloneDeep';

type State = {
  items: Item[],
  users: User[],
}

type DispatchProps = {
  addItem: () => void,
  addUser: () => void,
  deleteItem: (id: string) => void,
  deleteUser: (id: string) => void,
}

type Props = DispatchProps & State;

class App extends Component<Props>{

  state: State = {
    items: [],
    users: []
  }


  handleOnChange = (event: any) => {
    const { parentNode, value, name } = event.currentTarget;
    const items = cloneDeep(this.props.items)

    this.setState((prevState, props) => {
      return {
        items:
          props.items.map(item => {
            if (parentNode.id === item.id) {
              return name === 'name' ? {
                ...item,
                name: String(value)
              } :
                {
                  ...item,
                  cost: Number(value)
                };
            };
          })
      }
    })
  }


  onAddItem = () => {
    this.props.addItem();
  }

  onAddUser = () => this.props.addUser();

  onDeleteUser = (event: any): void => {
    event.preventDefault();
    const id = String(event.target.parentNode.getAttribute('id'));
    this.props.deleteUser(id)
  }

  onDeleteItem = (event: any): void => {
    event.preventDefault();
    const id = String(event.target.parentNode.getAttribute('id'));
    this.props.deleteItem(id)
  }

  public render() {
    const { users, items } = this.props;

    const listItems = items.map((item: Item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        item={item}
        handleOnChange={this.handleOnChange}
        onClick={this.onDeleteItem}
      />
    ));
    return (
      <div className="App d-flex justify-content-start">
        <h2>Income-based expense splitting</h2>

        <div className="flex-row">
          <h4>Annual income</h4>
          <ul className='expense-list'>
            {listItems}
            <button onClick={this.onAddItem} type="button">
              + Add Item
              </button>
          </ul>

          <UserList
            users={users}
            onAddUser={this.onAddUser}
            onClick={this.onDeleteUser}
            handleOnChange={this.handleOnChange}
          />

        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    items: state.ItemList.items,
    users: state.UserList.users,
  }
}

export default connect(
  mapStateToProps,
  {
    addItem,
    addUser,
    deleteItem,
    deleteUser
  }
)(App);