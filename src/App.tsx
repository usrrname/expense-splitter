import React, { Component } from 'react';
import './App.css';
import './index.css';
import { User, ItemState, UserState, Item } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem, getTotal } from './store/reducers/ItemListReducer';
import { addUser, deleteUser, sortIncome } from './store/reducers/UserListReducer';
import { AppState } from './store/store';
import UserList from './components /UserList';
import ExpenseList from './components /ExpenseList';
import Total from './components /Total';
import SortByIncome from './components /SplitByIncome';

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
  sortIncome: () => void
}

type Props = DispatchProps & State;

class App extends Component<Props>{

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
        items: props.itemState.items.map((item: Item) => {
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
        })
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
              user.income = Number(value);
              return {
                ...user,
                income: prevState.inputValue
              }
            }
          }
        })
      }
    })
  }

  onGetTotal = () => {
    this.props.getTotal();
  }

  onAddItem = () => {
    this.props.addItem()
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

  onSortIncome = (event: any): void => {
    this.props.sortIncome();
  }

  public render() {
    const { itemState } = this.props;
    const { users } = this.props.userState;

    return (

      <div className="App d-flex justify-content-start">
        <h2>Income-based expense splitter</h2>

        <div className="flex-row">
          <ExpenseList
            items={itemState.items}
            addItem={this.onAddItem}
            deleteItem={this.onDeleteItem}
            handleOnChange={this.handleItemChange}
          />

          <label>Total: </label>
          <Total
            itemState={itemState}
            onClick={this.onGetTotal}
          />

          <UserList
            users={users}
            onAddUser={this.onAddUser}
            onDeleteUser={this.onDeleteUser}
            handleOnChange={this.handleUserChange}
          />

          <SortByIncome
            users={users}
            onClick={this.onSortIncome}
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
    getTotal,
    sortIncome
  }
)(App);