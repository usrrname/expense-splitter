import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { User, ItemState, UserState, Item } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem, getTotal } from './store/reducers/ItemListReducer';
import { addUser, deleteUser, sortIncome } from './store/reducers/UserListReducer';
import { AppState } from './store/store';
import UserList from './components /UserList';
import ExpenseList from './components /ExpenseList';
import Total from './components /Total';
import SortByIncome from './components /SplitByIncome';
import { Container, Row, Col } from 'react-bootstrap';

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

  handleFocus = (event: any) => {
    const { value } = event.target;
    if (event && value != null && value.length >= 0) {
      this.setState({ inputValue: value, isFocused: true })
    }
  }

  handleItemChange = (event: any) => {
    const { parentNode, value, name } = event.target;

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
            } else if (name === 'cost') {
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
    this.onGetTotal();
  }

  handleUserChange = (event: any) => {
    const { parentNode, value, name } = event.target;

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
            } else if (name === 'income') {
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
    this.onGetTotal();
  }

  onGetTotal = () => this.props.getTotal();

  onAddItem = () => this.props.addItem();

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
      <Container fluid="md">
        <Row>
          <Col>
            <h2>Expense splitter</h2>
            <ExpenseList
              items={itemState.items}
              addItem={this.onAddItem}
              deleteItem={this.onDeleteItem}
              handleOnChange={this.handleItemChange}
              handleFocus={this.handleFocus}
            />

            <Total
              itemState={itemState}
              onBlur={this.onGetTotal}
            />
          </Col>
          <Col>

            <UserList
              users={users}
              onAddUser={this.onAddUser}
              onDeleteUser={this.onDeleteUser}
              handleOnChange={this.handleUserChange}
              handleFocus={this.handleFocus}
            />

            <SortByIncome
              users={users}
              onClick={this.onSortIncome}
            />
          </Col>
        </Row>
      </Container>
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