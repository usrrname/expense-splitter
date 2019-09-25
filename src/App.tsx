import React, { Component, ChangeEvent } from 'react';
import './App.css';
import './index.css';
import { Item, User } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem } from './store/reducers/ItemListReducer';
import { deleteUser } from './store/reducers/UserListReducer';
import UserList from './UserList';
import ExpenseItemList from './ExpenseItemList';
import { AppState } from './store/store';
import { largest } from './types/utils';

interface AppProps {
  items: Item[],
  initialCount: number,
  initialPeople: number,
  users: User[],
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}

type StateProps = {
  items: Item[],
  itemCount: number,
  headCount: number,
}

type DispatchProps = {
  addItem: () => void,
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
    items: this.props.items,
    itemCount: this.props.initialCount,
    headCount: this.props.initialPeople,
  };

  componentWillReceiveProps({ initialCount, initialPeople }: Props) {
    if (initialCount != null && initialCount !== initialCount) {
      this.setState({ itemCount: Number(this.props.items.length) });
    }
    if (initialPeople != null && initialPeople !== initialPeople) {
      this.setState({ headCount: Number(this.props.items.length) });
    }
  }

  onItemClick = () => {
    this.props.addItem();
  }
  onDeleteUser = (event: any): void => {
    event.preventDefault();
    const id = String(event.target.parentNode.getAttribute('data-id'));
    this.props.deleteUser(id)
  }

  handleChange = (event: any): void => {
    if (event.target.name === 'user-income') {
      this.setState({
        user: {
          income: Number(event.target.value)
        }
      })
      this.updateIncomeRatio();
    }
  }

  updateIncomeRatio = () => {
    const { users } = this.props;
    for (let i = 0; i < users.length; i++) {
      let { income } = users[i];
      return largest(income, income++)
    }
  }


  updateItem = (inputName: string, item: Item[], inputValue: string) => {
    if (inputName === 'item-name') {
      item[0].name = inputValue;
    }
    if (inputName === 'item-cost') {
      item[0].cost = Number(inputValue);
    }
    return item
  }

  onInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { items } = this.props;

    const selectedItem = Object.assign({}, items);
    let { id } = selectedItem[0];
    let inputName = event.target.name;
    let inputValue = event.target.value;

    let item = items.filter(item =>
      item.id === id
    )
    this.updateItem(inputName, item, inputValue);
  }

  render() {

    return (

      <div className="App d-flex justify-content-between">
        <h2>Income-based expense splitting</h2>

        <div className="flex-row">
          <h4>Annual income</h4>

          <UserList
            deleteUser={this.onDeleteUser}
            users={this.props.users}
            onChange={this.handleChange}
          />

          <div className="flex-column expense-list-wrapper">
            <ExpenseItemList
              items={this.props.items}
              {...this.state.items}
              onChange={this.onInput}
              deleteItem={deleteItem}
            />
            <button onClick={this.onItemClick} type="button">+</button>
            {/* <p>Total:<span onChange={this.onGetTotal}>{this.props.show.total}</span></p> */}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: AppState) => {
  return {
    itemCount: state.ItemList.itemCount,
    items: state.ItemList.items,
    headCount: state.UserList.headCount,
    users: state.UserList.users,
  }
}


export default connect(
  mapStateToProps,
  {
    addItem,
    deleteItem,
    deleteUser
  }
)(App);

