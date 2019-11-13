import React, { Component } from 'react';
import './App.css';
import './index.css';
import { User, ItemState, UserState } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem, getTotal } from './store/reducers/ItemListReducer';
import { addUser, deleteUser } from './store/reducers/UserListReducer';
import { AppState } from './store/store';
import UserList from './components /UserList';
import ExpenseList from './components /ExpenseList';
import Total from './components /Total';

type State = {
  itemState: ItemState,
  userState: UserState,
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
    itemState: this.props.itemState,
    userState: this.props.userState,
    isFocused: false,
    inputValue: '',
  }

  handleItemChange = (event: any) => {
    const { parentNode, value, name } = event.target;

    if (event && value != null && value.length >= 0) {
      this.setState({
        inputValue: value,
        isFocused: true
      })
    }

    this.setState((prevState: State, props: Props) => {
      return {
        items: props.itemState.items.map(item => {
          if (parentNode.id === item.id) {
            if (name === 'name') {
              item.name = value;
              return {
                ...item,
                name: prevState.inputValue
              }
            }
            if (name === 'cost') {
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

  handleUserChange = (event: any) => {
    const { parentNode, value, name } = event.target;

    if (event && value != null && value.length >= 0) {
      this.setState({
        inputValue: value,
        isFocused: true
      })
    }

    this.setState((prevState: State, props: Props) => {
      return {
        users: props.userState.users.map((user: User) => {
          if (parentNode.id === user.id) {
            if (name === 'name') {
              user.name = value;
              return {
                ...user,
                name: prevState.inputValue
              }
            }
            if (name === 'income') {
              user.income = value;
              return {
                ...user,
                income: Number(prevState.inputValue)
              }
            }
          }
        }
        )
      }
    })
  }

  onGetTotal = () => {
    this.props.getTotal();
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
    const { items } = this.props.itemState;
    const { users } = this.props.userState;

    return (

      <div className="App d-flex justify-content-start">
        <h2>Income-based expense splitting</h2>

        <div className="flex-row">
          <h4>Annual income</h4>

          <ExpenseList
            items={items}
            addItem={this.onAddItem}
            deleteItem={this.onDeleteItem}
            handleOnChange={this.handleItemChange}
          />
          <label>Total: </label>
          <Total
            itemState={this.props.itemState}
            onClick={this.onGetTotal}
          />

          <UserList
            users={users}
            addUser={this.onAddUser}
            deleteUser={this.onDeleteUser}
            handleOnChange={this.handleUserChange}
          />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    itemState: state.ItemList,
    userState: state.UserList,
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