import React, { Component } from 'react';
import './App.css';
import './index.css';
import { CalcState, Item } from './types/types';
import { connect } from "react-redux";
import { addItem, deleteItem } from './store/reducers/reducer';
import ExpenseItem from './ExpenseItem';


export type parentProps = {
  addItem: () => void,
  items: Item[]
  deleteItem: (id: string) => void
}

type Props = parentProps;

type State = {
  person1: Number,
  person2: Number,
}

class App extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick = () => {
    this.props.addItem();
  }

  // onGetTotal = () => {
  //   this.props.getTotal();
  // }

  onDeleteItem = (id: string) => {
    this.props.deleteItem(id);
  }

  handleChange = (event: any): void => {
    // TO-DO refactor to make this shorter
    if (event.target.name === 'income1') {
      this.setState({ person1: event.target.value })
    }
    else if (event.target.name === 'income2') {
      this.setState({ person2: event.target.value })
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div className="App d-flex justify-content-between">
        <h2>Income-based expense splitting</h2>

        <div className="flex-row">
          <h4>Annual income</h4>
          <label>Your Income: </label>
          <input onChange={this.handleChange} name="income1"></input>
          <label>Their Income: </label>
          <input onChange={this.handleChange} name="income2"></input>

          <div className="flex-column">
            
            {items && (items.map(item =>
              <ExpenseItem key={item.id} name={item.name} cost={item.cost} onDeleteItem={this.onDeleteItem} />,
              { ...items }
            )
            )}
            <button onClick={this.onItemClick} >+</button>

            {/* <p>Total:<span onChange={this.onGetTotal}>{this.props.show.total}</span></p> */}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: CalcState) => {
  return {
    items: state.items
  }
}


export default connect(
  mapStateToProps, {
    items: addItem
  }
)(App);

