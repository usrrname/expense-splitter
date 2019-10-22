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

type StateProps = {
  users: User[]
  items: Item[],
}

type DispatchProps = {
  addItem: () => void,
  addUser: () => void,
  deleteItem: (id: string) => void,
  deleteUser: (id: string) => void,
}

type Props = StateProps & DispatchProps;

class App extends Component<Props>{

  readonly state: StateProps = {
    items: this.props.items,
    users: this.props.users
  };

  inputChangeHandler = (event: any) => {
    const items = [...this.state.items];
    const index = items.findIndex(item => item.id === event.target.parentNode.id);
    if (index !== -1) {
      this.setState(
        {
          items: {
            [index]: {
              name: event.target.value
            }
          }
        })
    }
  }

  handleUserChange = (event: any) => {
    const users = { ...this.state.users }
    users[event.target.parentNode.id].name = event.target.value //currentTarget returns input field
    this.setState({ users: users })
  }
  componentWillMount() {

  }
  componentDidUpdate() {

    const { items, users } = this.state;
    // if (this.state.itemCount != null && this.state.itemCount !== items.length) {
    //   this.setState({ itemCount: Number(items.length) });
    // }
    // if (this.state.headCount != null && this.state.headCount !== users.length) {
    //   this.setState({ headCount: Number(users.length) });
    // }
  }
  componentWillReceiveProps() {


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

  render() {
    const { items, users } = this.props;
    const listItems = items.map((item: Item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        handleOnChange={this.inputChangeHandler}
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
            handleOnChange={this.handleUserChange}
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