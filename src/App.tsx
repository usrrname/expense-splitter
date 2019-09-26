import React, { Component, ChangeEvent } from 'react';
import './App.css';
import './index.css';
import { Item, User, IState, UState } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem } from './store/reducers/ItemListReducer';
import { addUser, deleteUser } from './store/reducers/UserListReducer';
import UserList from './UserList';
import ExpenseItemList from './ExpenseItemList';
import store, { AppState } from './store/store';

interface AppProps {
  ItemList: IState,
  UserList: UState,
  initialCount: number,
  initialPeople: number,

}

type StateProps = {
  items: Item[],
  users: User[],
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
  static defaultProps = {
    initialCount: 1,
    initialPeople: 2
  }

  readonly state: StateProps = {
    users: this.props.users,
    items: this.props.items,
    itemCount: this.props.initialCount,
    headCount: this.props.initialPeople,
  };

  componentDidMount() {

  }
  componentDidUpdate() {

  }
  componentWillReceiveProps() {
    const { initialCount, initialPeople, items, users } = this.props;
    if (initialCount != null && this.state.itemCount !== initialCount) {
      this.setState({ itemCount: Number(items.length) });
    }
    if (initialPeople != null && this.state.headCount !== initialPeople) {
      this.setState({ headCount: Number(users.length) });
    }
  }

  onAddItem = () => {
    this.props.addItem();
  }

  handleChange = (event: any) => {
    this.setState({
      ...this.state.users
    })
  }

  handleItemChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state.items
    })
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
    const { items } = this.state;
    return (

      <div className="App d-flex justify-content-start">
        <h2>Income-based expense splitting</h2>

        <div className="flex-row">
          <h4>Annual income</h4>

          <UserList
            users={this.props.users}
            {...this.state.users}
            onClick={this.onDeleteUser}
            onChange={this.handleChange}
          />
          <button onClick={this.onAddUser} type="button">+</button>

          <div className="flex-column expense-list-wrapper">
            <ExpenseItemList

              items={items}
              onItemChange={this.handleItemChange}
              onClick={this.onDeleteItem}
            />
            <button onClick={this.onAddItem} type="button">+</button>

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