import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Item, User } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem, getTotal } from './store/reducers/ItemListReducer';
import { addUser, deleteUser } from './store/reducers/UserListReducer';
import { AppState } from './store/store';
import UserList from './components /UserList';
import ExpenseList from './components /ExpenseList';

type State = {
  items: Item[],
  users: User[],
  isFocused: boolean,
  inputValue?: any,
}

type DispatchProps = {
  addItem: () => void,
  addUser: () => void,
  getTotal: () => void,
  deleteItem: (id: string) => void,
  deleteUser: (id: string) => void,
}

type Props = DispatchProps & State;

class App extends Component<Props>{

  state: State = {
    items: [],
    users: [],
    isFocused: false,
    inputValue: '',
  }

  handleOnChange = (event: any) => {
    const { parentNode, value, name } = event.target;

    if (event && value != null && value.length >= 0) {
      this.setState({
        inputValue: value,
        isFocused: true
      })
    }

    this.setState((prevState: State, props: Props) => {
      return {
        items: props.items.map(item => {
          if (parentNode.id === item.id) {
            if (name == 'name') {
              item.name = value;
              return {
                ...item,
                name: prevState.inputValue
              }
            }
            if (name == 'cost') {
              item.cost = value;
              return {
                ...item,
                cost: Number(prevState.inputValue)
              }
            }
          }
        }
        )
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
    this.props.deleteUser(id);
  }

  onDeleteItem = (event: any): void => {
    event.preventDefault();
    const id = String(event.target.parentNode.getAttribute('id'));
    this.props.deleteItem(id)
  }

  public render() {
    const { users, items } = this.props;

    return (

      <div className="App d-flex justify-content-start">
        <h2>Income-based expense splitting</h2>

        <div className="flex-row">
          <h4>Annual income</h4>

          <ExpenseList
            items={items}
            addItem={this.onAddItem}
            deleteItem={this.onDeleteItem}
            handleOnChange={this.handleOnChange}
          />
          {!this.state.isFocused && <span>Total: {this.props.getTotal} </span>}

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
    isFocused: state.ItemList.isFocused
  }
}

export default connect(
  mapStateToProps,
  {
    addItem,
    addUser,
    deleteItem,
    deleteUser,
    getTotal
  }
)(App);