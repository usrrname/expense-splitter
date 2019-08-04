import React, {Component} from 'react';
import './App.css';
import { ReduxState, Item} from './types/types';
import './index.css';
import { connect } from "react-redux";
import {addItem} from './store/reducers/calculateReducer';
import {getTotal} from './store/reducers/showPayReducer';
import ExpenseItem from './ExpenseItem';

type State = {
  items: Array<{ id: string, name: string, cost: number}>,
  income1: number,
  income2: number,
  total: number,
};

type Props = {
  getTotal: (items: Item[]) => number,
  addItem: () => void,
  item: Item,
};

class App extends Component<Props, State>{

  readonly state : State = {
    items: [],
    total: 0,
    income1: 0,
    income2: 0,
  }

  onItemClick = () => {
    this.props.addItem();
    return (
      <ExpenseItem id={this.props.item.id} name={this.props.item.name} cost={this.props.item.cost}/>
    )
  }

  onGetTotal = () => {
    this.props.getTotal(this.state.items);
  }

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
    const { items, income1, income2 } = this.state;
    return (
      <div className="App d-flex justify-content-start">
        <h2>Income-based expense splitting for confused couples!</h2>
        
        <div className="flex-row">
          <h4>Annual income</h4>
          <label>Your Income</label>
          <input onChange={this.handleChange} name="income1" value={income1}></input>
          <label>Their Income</label>
          <input onChange={this.handleChange} name="income2" value={income2}></input>
          
          {items.map( item =>
          <ExpenseItem id={item.id} name={item.name} cost={item.cost}/>
            )}
            
            <button value="calculate" onClick={this.onGetTotal}>Calculate</button>
            <button value="calculate" onClick={this.onItemClick}> + </button>
          </div>
      
      </div>
    )
  }
};

  const mapStateToProps = (state: ReduxState) => {
    return {
      calc: state.calc,
      show: state.show
    }
  }
  
export default connect(
  mapStateToProps,
  {
    total: getTotal,
    items: addItem
  },
)(App);

