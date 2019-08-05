import React, {Component, Dispatch} from 'react';
import './App.css';
import { CalcState, showState,Item} from './types/types';
import './index.css';
import { connect } from "react-redux";
import {addItem} from './store/reducers/calculateReducer';
import {getTotal} from './store/reducers/showPayReducer';
import ExpenseItem from './ExpenseItem';
import store from './store/store';
import { Action } from './store/actions/actions';
import { Store } from 'redux';

type Props = {
  addItem: Function,
  item?: Item,
}

// type State = {
//   items: Item[],
//   total: number,
//     income1: number,
//     income2: number,
//     person1: Array<number>,
//     person2: Array<number>
// }

type State = CalcState & showState;

class App extends Component<Props, State>{

  readonly state: State = {
    items: [],
    total: 0,
    income1: 0,
    income2: 0,
    person1: [],
    person2: []
  }
  componentDidMount() {
    store.subscribe(() =>
    this.forceUpdate())    
};
componentWillUnmount(){
  store.subscribe(()=>
  !store.subscribe)
}
  onItemClick = () => {
    this.props.addItem(this.state);
  }

  onGetTotal = () => {
    // this.props.getTotal(this.state.items);
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
    const { items, income1, income2, total } = this.state;
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
            <ExpenseItem key={item.id} name={item.name} cost={item.cost}/>,
              {...items}
              )}

            <span>Total: {total}</span>
            {/* <button onClick={this.onGetTotal}>Calculate</button> */}
            <button onClick={() => store.dispatch({
              type: 'ADD_ITEM',
              onClick: this.props.addItem(this.state.items)
            })} name="addItem"> + </button>
          </div>
      </div>
    )
  }
};

  const mapStateToProps = (state: State) => {
    return {
      items: state.items,
      total: state.total
    }
  }
  

export default connect(
  mapStateToProps,
  {
  state: addItem
   }
)(App);

