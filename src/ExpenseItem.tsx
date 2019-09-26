import React, { ChangeEvent, MouseEventHandler, Component } from 'react';

type Props = {
  id: string,
  name: string,
  cost: number,
  onItemChange: (event: any) => void,
  onClick: (event:any) => void,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}

class ExpenseItem extends Component<Props>{
  
onChange = (event: ChangeEvent<HTMLInputElement>) => {
  this.props.onItemChange(event.target.value)
 }
  render(){
    const {cost, name, onChange, onClick, id} = this.props;
    return (
    <li className='expense-item' data-id={id}>
      <label>Item</label><input onChange={this.onChange} type="text" name="item-name" placeholder="Name of expense" value={name}></input>
      <label>Cost</label><input onChange={this.onChange} type="number" name="item-cost" placeholder="Amount" value={cost}></input>
      <button onClick={onClick} type="button"> x </button>
    </li>
  )
  }
}

export default ExpenseItem;