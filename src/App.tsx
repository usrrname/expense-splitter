import React, {Component, Dispatch} from 'react';
import './App.css';
import { CalcState, ShowState,Item} from './types/types';
import './index.css';
import { connect } from "react-redux";
import {addItem} from './store/reducers/calculateReducer';
import {getTotal} from './store/reducers/showPayReducer';
import ExpenseItem from './ExpenseItem';
import store from './store/store';
import { Action } from './store/actions/actions';
import { Store } from 'redux';

type Props = {
  addItem: (state: CalcState) => Item[],
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

type State = CalcState;

class App extends Component<Props, State>{

  readonly state: State = {
    items: [],
    income1: 0,
    income2: 0,
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
    store.dispatch({
      type: 'ADD_ITEM',
      onclick: this.props.addItem(this.state)
    })
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
    const { addItem } = this.props;  
    const { items } = this.state;
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
            <ExpenseItem key={item.id} name={item.name} cost={item.cost}/>,
              {...items}
              )}
            {/* <button onClick={this.onGetTotal}>Calculate</button> */}
            <button onClick={this.onItemClick} > + </button>
            <p>Total:</p>
          </div>
        </div>
      </div>
    )
  }
};

  const mapStateToProps = (state: State) => {
    return {
      items: state.items,
    }
  }
  

export default connect(
  mapStateToProps,
  {
   calcReducer: addItem
   }
)(App);

