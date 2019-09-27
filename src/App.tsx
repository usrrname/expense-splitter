import React, { Component, ChangeEvent } from 'react';
import './App.css';
import './index.css';
import { Item, User } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem } from './store/reducers/ItemListReducer';
import { addUser, deleteUser } from './store/reducers/UserListReducer';
import UserList from './components /UserList';
import ExpenseItemList from './components /ExpenseItemList';
import store, { AppState } from './store/store';

type AppProps = {

}
type StateProps = {
  users: User[]
  items: Item[],
  itemCount: number,
  headCount: number,
}

type DispatchProps = {
  addItem: () => void,
  addUser: () => void,
  deleteItem: (id: string) => void,
  deleteUser: (id: string) => void,
}

type Props = AppProps & StateProps & DispatchProps;

class App extends Component<Props>{

  readonly state: StateProps = {
    users: this.props.users,
    items: this.props.items,
    itemCount: 1,
    headCount: 2,
  };

  componentDidMount() {

  }
  componentDidUpdate() {

    const { items, users } = this.props;
    if (this.state.itemCount != null && this.state.itemCount !== items.length) {
      this.setState({ itemCount: Number(items.length) });
    }
    if (this.state.headCount != null && this.state.headCount !== users.length) {
      this.setState({ headCount: Number(users.length) });
    }
  }
  componentWillReceiveProps() {

  }

  onAddItem = () => {
    this.props.addItem();
  }

  onAddUser = () => this.props.addUser();

  onDeleteUser = (event: any): void => {
    event.preventDefault();
    const id = String(event.target.parentNode.getAttribute('data-id'));
    this.props.deleteUser(id)
  }

  onDeleteItem = (event: any): void => {
    event.preventDefault();
    const id = String(event.target.parentNode.getAttribute('data-id'));
    this.props.deleteItem(id)
  }

  render() {
    const { items, users } = this.props;
    return (
      <div className="App d-flex justify-content-start">
        <h2>Income-based expense splitting</h2>

        <div className="flex-row">
          <h4>Annual income</h4>

          <UserList
            users={users}
            onAddUser={this.onAddUser}
            onClick={this.onDeleteUser}
          />

          <div className="flex-column expense-list-wrapper">
            <ExpenseItemList
              items={items}
              onClick={this.onDeleteItem}
              onAddItem={this.onAddItem}
            />

          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    itemCount: state.ItemList.itemCount,
    headCount: state.UserList.headCount,
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