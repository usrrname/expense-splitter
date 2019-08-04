import React, {Component} from 'react';
import './App.css';
import { ReduxState} from './types/types';
import './index.css';
import { connect } from "react-redux";
import {getTotal} from './store/actions/actions';

// const items = [ 
//   {id: "0", name: "rent", cost: 2000},
//   {id: "1", name: "groceries", cost:200},
//   {id: "2", name: "dining out", cost: 350},
//   {id: "3", name: "internet", cost: 50}
// ];

type State = {
  items: ReadonlyArray<{ id: string, name: string, cost: number}>,
  income1: number,
  income2: number,
  total: number,
}

type Props = {
  getTotal: () => {},
  addItem: () => void
}

class App extends Component<Props, State>{

  readonly state : State = {
    items: [],
    total: 0,
    income1: 0,
    income2: 0,
  }

  onItemClick = () => {
    this.props.addItem()
  }

  getTotal = () => {
    this.props.getTotal();
  }

  handleChange = (event: any): void => {
    // TO-DO refactor to make this shorter
      if (event.target.name == 'income1' ) {
          this.setState({ income1 : event.target.value })
      }
      else if (event.target.name == 'income2' ){
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
        
            <div>
              <li>
                <label>Cost</label><input name="expense" type="number" placeholder="Amount"></input>
                <label>Item</label><input name="name" type="text" placeholder="Name of expense"></input>
              </li>
            </div>
            <button value="calculate" onClick={this.getTotal}>Calculate</button>
            <button value="calculate" onClick={this.onItemClick}>&plus;</button>
          </div>
      
      </div>
    )
  }
};

  const mapStateToProps = (state: ReduxState) => {
    return {
      items: state.calc.items,
      total: state.show.total
    }
  }
  
export default connect(
  mapStateToProps,
  {
  getTotal
  },
)(App);

