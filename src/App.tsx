import React, {Component} from 'react';
import './App.css';
import './index.css';
import { Item, CalcState, ReduxState} from './types/types';
import { connect } from "react-redux";
import {addItem } from './store/reducers/calculateReducer';
import ExpenseItem from './ExpenseItem';
import store from './store/store';

type Props = {
  addItem: () => void,
}

type State = {
  // total: number,
  income1: number,
  income2: number,
  items: Item[],
  // person1: Array<number>,
  // person2: Array<number>
}

class App extends Component<Props, State>{

  readonly state: CalcState = {
    items: [],
    income1: 0,
    income2: 0,
  }
  componentDidMount() {

};

componentWillUnmount(){

}
  onItemClick = () => {
   this.props.addItem();
  }

  onGetTotal = () => {
    // this.props.getTotal(this.state.items);
  }
  // onDeleteItem = (id: string) => {
  //   this.props.deleteItem(id);
  // }

  handleChange = (event: any): void => {
    // TO-DO refactor to make this shorter
      if (event.target.name === 'income1' ) {
        this.setState({ income1 : event.target.value })
      }
      else if (event.target.name === 'income2' ){
        this.setState({ income2 : event.target.value })
      }
  }

  render(){
    const { items } = this.state;
    const {addItem} = this.props;
    return (
      <div className="App d-flex justify-content-between">
        <h2>Income-based expense splitting</h2>
        
        <div className="flex-row">
          <h4>Annual income</h4>
          <label>Your Income: </label>
          <input onChange={this.handleChange} name="income1"></input>
          <label>Their Income: </label>
          <input onChange={this.handleChange} name="income2"></input>
          <div className="flex-row">
          {items.map( item =>
            <ExpenseItem key={item.id} name={item.name} cost={item.cost} />,
              {...items}
              )}
            {/* <button onClick={this.onGetTotal}>Calculate</button> */}
            <button onClick={this.onItemClick} >+</button>
            <p>Total:</p>
          </div>
        </div>
      </div>
    )
  }
};

  const mapStateToProps = (state: ReduxState) => {
    return {
     calc: state.calc
    }
  }
  

export default connect(
  mapStateToProps,
  {
    addItem
  }
)(App);

